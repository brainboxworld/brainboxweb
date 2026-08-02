import { useEffect, useRef, useState } from "react";
import { MessageCircle, X, Send } from "lucide-react";
import { brand, contact } from "@/content/site";

type Msg = { role: "user" | "assistant"; content: string; escalate?: boolean };

const GREETING: Msg = {
  role: "assistant",
  content: `Hi 👋 I'm the ${brand.name} assistant. Ask me about our Shopify, SEO or ads services — or chat with the team on WhatsApp anytime.`,
};

const QUICK = [
  "What services do you offer?",
  "Can you build a Shopify store for me?",
  "How do we get started?",
];

export function LiveChat() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<Msg[]>([GREETING]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    scrollRef.current?.scrollTo({ top: scrollRef.current.scrollHeight, behavior: "smooth" });
  }, [messages, loading, open]);

  useEffect(() => {
    if (open) inputRef.current?.focus();
  }, [open]);

  useEffect(() => {
    const openChat = () => setOpen(true);
    window.addEventListener("open-live-chat", openChat);
    return () => window.removeEventListener("open-live-chat", openChat);
  }, []);


  async function send(text: string) {
    const trimmed = text.trim();
    if (!trimmed || loading) return;
    const next = [...messages, { role: "user" as const, content: trimmed }];
    setMessages(next);
    setInput("");
    setLoading(true);
    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          messages: next.map((m) => ({ role: m.role, content: m.content })),
        }),
      });
      const data = (await res.json()) as { reply?: string; escalate?: boolean; error?: string };
      if (!res.ok || !data.reply) {
        setMessages((m) => [
          ...m,
          {
            role: "assistant",
            content:
              data.error ??
              "Sorry, I couldn't answer that right now. Please message the team on WhatsApp.",
            escalate: true,
          },
        ]);
      } else {
        setMessages((m) => [
          ...m,
          { role: "assistant", content: data.reply!, escalate: data.escalate },
        ]);
      }
    } catch {
      setMessages((m) => [
        ...m,
        {
          role: "assistant",
          content: "I'm having trouble connecting. You can reach the team directly on WhatsApp.",
          escalate: true,
        },
      ]);
    } finally {
      setLoading(false);
      inputRef.current?.focus();
    }
  }

  return (
    <>
      {open && (
        <div className="fixed inset-x-3 bottom-24 z-50 flex max-h-[70vh] flex-col overflow-hidden rounded-2xl border border-border bg-background shadow-2xl sm:inset-x-auto sm:right-6 sm:w-[380px]">
          <div className="flex items-center justify-between gap-3 bg-gradient-brand px-4 py-3 text-brand-foreground">
            <div>
              <p className="text-sm font-semibold">{brand.name} Live Chat</p>
              <p className="flex items-center gap-1.5 text-xs opacity-90">
                <span className="inline-block h-2 w-2 rounded-full bg-green-400" />
                AI assistant — replies instantly
              </p>
            </div>
            <button
              onClick={() => setOpen(false)}
              aria-label="Close live chat"
              className="rounded-full p-1 transition-opacity hover:opacity-80"
            >
              <X className="h-5 w-5" />
            </button>
          </div>

          <div ref={scrollRef} className="flex-1 space-y-3 overflow-y-auto px-4 py-4">
            {messages.map((m, i) => (
              <div key={i}>
                <div
                  className={
                    m.role === "user"
                      ? "ml-auto w-fit max-w-[85%] rounded-2xl rounded-br-sm bg-primary px-3 py-2 text-sm text-primary-foreground"
                      : "w-fit max-w-[90%] whitespace-pre-wrap text-sm text-foreground"
                  }
                >
                  {m.content}
                </div>
                {m.escalate && (
                  <a
                    href={contact.whatsapp}
                    target="_blank"
                    rel="noreferrer"
                    className="mt-2 inline-flex items-center gap-2 rounded-lg bg-[#25D366] px-3 py-2 text-xs font-semibold text-white transition-opacity hover:opacity-90"
                  >
                    Continue on WhatsApp
                  </a>
                )}
              </div>
            ))}
            {loading && <p className="animate-pulse text-sm text-muted-foreground">Typing…</p>}
            {messages.length === 1 && (
              <div className="flex flex-wrap gap-2 pt-1">
                {QUICK.map((q) => (
                  <button
                    key={q}
                    onClick={() => send(q)}
                    className="rounded-full border border-border px-3 py-1.5 text-xs text-muted-foreground transition-colors hover:bg-muted"
                  >
                    {q}
                  </button>
                ))}
              </div>
            )}
          </div>

          <form
            onSubmit={(e) => {
              e.preventDefault();
              send(input);
            }}
            className="flex items-center gap-2 border-t border-border p-3"
          >
            <input
              ref={inputRef}
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Type your question…"
              className="min-w-0 flex-1 rounded-lg border border-input bg-background px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-ring"
            />
            <button
              type="submit"
              disabled={loading || !input.trim()}
              aria-label="Send message"
              className="rounded-lg bg-gradient-brand p-2.5 text-brand-foreground transition-opacity hover:opacity-90 disabled:opacity-50"
            >
              <Send className="h-4 w-4" />
            </button>
          </form>

          <a
            href={contact.whatsapp}
            target="_blank"
            rel="noreferrer"
            className="border-t border-border bg-muted/40 px-4 py-2.5 text-center text-xs font-medium text-muted-foreground transition-colors hover:bg-muted"
          >
            Prefer a human? Chat on WhatsApp {contact.phoneDisplay}
          </a>
        </div>
      )}

      <button
        onClick={() => setOpen((o) => !o)}
        aria-label="Open live chat"
        className="fixed bottom-6 right-6 z-50 inline-flex items-center gap-2 rounded-full bg-gradient-brand px-5 py-3 text-sm font-semibold text-brand-foreground shadow-lg transition-opacity hover:opacity-90"
      >
        <MessageCircle className="h-4 w-4" />
        Live Chat
      </button>
    </>
  );
}

"use client";

import { useState, useRef, useEffect } from "react";
import { X, MessageCircle, Send, ChevronDown } from "lucide-react";

type Message = {
	role: "user" | "assistant";
	content: string;
};

const GREETING = "Hey! I'm the NORBILT assistant — I can give you real cost estimates and answer questions about any home project in Clark County. What are you working on?";

export default function ChatWidget() {
	const [open, setOpen] = useState(false);
	const [messages, setMessages] = useState<Message[]>([
		{ role: "assistant", content: GREETING },
	]);
	const [input, setInput] = useState("");
	const [loading, setLoading] = useState(false);
	const [unread, setUnread] = useState(false);
	const [hasOpened, setHasOpened] = useState(false);
	const bottomRef = useRef<HTMLDivElement>(null);
	const inputRef = useRef<HTMLTextAreaElement>(null);

	// Nudge after 30s if they haven't opened it
	useEffect(() => {
		if (hasOpened) return;
		const t = setTimeout(() => setUnread(true), 30000);
		return () => clearTimeout(t);
	}, [hasOpened]);

	useEffect(() => {
		if (open) {
			setUnread(false);
			setHasOpened(true);
			setTimeout(() => inputRef.current?.focus(), 100);
		}
	}, [open]);

	useEffect(() => {
		bottomRef.current?.scrollIntoView({ behavior: "smooth" });
	}, [messages, loading]);

	async function send() {
		const text = input.trim();
		if (!text || loading) return;
		setInput("");

		const newMessages: Message[] = [...messages, { role: "user", content: text }];
		setMessages(newMessages);
		setLoading(true);

		const assistantMsg: Message = { role: "assistant", content: "" };
		setMessages((prev) => [...prev, assistantMsg]);

		try {
			const res = await fetch("/api/chat", {
				method: "POST",
				headers: { "Content-Type": "application/json" },
				body: JSON.stringify({
					messages: newMessages.map((m) => ({ role: m.role, content: m.content })),
				}),
			});

			if (!res.body) throw new Error("No stream");

			const reader = res.body.getReader();
			const decoder = new TextDecoder();
			let accumulated = "";

			while (true) {
				const { done, value } = await reader.read();
				if (done) break;
				accumulated += decoder.decode(value, { stream: true });
				const finalAccumulated = accumulated;
				setMessages((prev) => {
					const updated = [...prev];
					updated[updated.length - 1] = { role: "assistant", content: finalAccumulated };
					return updated;
				});
			}
		} catch {
			setMessages((prev) => {
				const updated = [...prev];
				updated[updated.length - 1] = {
					role: "assistant",
					content: "Sorry, something went wrong. Call us directly at (360) 216-9920.",
				};
				return updated;
			});
		} finally {
			setLoading(false);
		}
	}

	function handleKey(e: React.KeyboardEvent<HTMLTextAreaElement>) {
		if (e.key === "Enter" && !e.shiftKey) {
			e.preventDefault();
			send();
		}
	}

	const QUICK = [
		"How much does a bathroom remodel cost?",
		"What do you charge for drywall repair?",
		"Do you do flooring installation?",
		"How fast can you get someone out?",
	];

	return (
		<>
			{/* CHAT PANEL */}
			{open && (
				<div className="fixed bottom-24 right-4 sm:right-6 z-50 w-[calc(100vw-2rem)] sm:w-[400px] max-h-[600px] flex flex-col rounded-2xl shadow-2xl overflow-hidden border border-[#E8E4DE]">
					{/* Header */}
					<div className="bg-[#1F2E2B] px-5 py-4 flex items-center justify-between shrink-0">
						<div className="flex items-center gap-3">
							<div className="relative">
								<div className="w-9 h-9 rounded-full bg-[#FFB800] flex items-center justify-center font-black text-black text-sm">N</div>
								<span className="absolute bottom-0 right-0 w-2.5 h-2.5 bg-green-400 rounded-full border-2 border-[#1F2E2B]" />
							</div>
							<div>
								<p className="text-white font-black text-sm leading-tight">NORBILT Assistant</p>
								<p className="text-[#A7C4B5] text-xs">Clark County's licensed GC</p>
							</div>
						</div>
						<button
							onClick={() => setOpen(false)}
							className="text-white/50 hover:text-white transition-colors p-1"
						>
							<ChevronDown className="w-5 h-5" />
						</button>
					</div>

					{/* Messages */}
					<div className="flex-1 overflow-y-auto bg-[#FDFCFB] px-4 py-4 space-y-3 min-h-0" style={{ maxHeight: "380px" }}>
						{messages.map((msg, i) => (
							<div key={i} className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}>
								<div
									className={`max-w-[85%] px-4 py-3 rounded-2xl text-sm leading-relaxed font-medium ${
										msg.role === "user"
											? "bg-[#1F2E2B] text-white rounded-br-sm"
											: "bg-white border border-[#E8E4DE] text-gray-700 rounded-bl-sm shadow-sm"
									}`}
								>
									{msg.content || (
										<span className="flex gap-1 items-center py-0.5">
											<span className="w-1.5 h-1.5 bg-[#FFB800] rounded-full animate-bounce [animation-delay:0ms]" />
											<span className="w-1.5 h-1.5 bg-[#FFB800] rounded-full animate-bounce [animation-delay:150ms]" />
											<span className="w-1.5 h-1.5 bg-[#FFB800] rounded-full animate-bounce [animation-delay:300ms]" />
										</span>
									)}
								</div>
							</div>
						))}
						<div ref={bottomRef} />
					</div>

					{/* Quick replies — only on first message */}
					{messages.length === 1 && (
						<div className="bg-[#F8F6F3] border-t border-[#E8E4DE] px-4 py-3 flex flex-wrap gap-2 shrink-0">
							{QUICK.map((q) => (
								<button
									key={q}
									onClick={() => { setInput(q); setTimeout(send, 0); setInput(q); }}
									className="text-xs font-bold text-[#1F2E2B] bg-white border border-[#E8E4DE] rounded-full px-3 py-1.5 hover:border-[#FFB800] hover:text-[#1F2E2B] transition-colors"
								>
									{q}
								</button>
							))}
						</div>
					)}

					{/* Input */}
					<div className="bg-white border-t border-[#E8E4DE] px-4 py-3 flex gap-2 items-end shrink-0">
						<textarea
							ref={inputRef}
							value={input}
							onChange={(e) => setInput(e.target.value)}
							onKeyDown={handleKey}
							placeholder="Ask about any home project..."
							rows={1}
							className="flex-1 resize-none text-sm font-medium text-gray-700 placeholder:text-gray-400 outline-none bg-transparent leading-relaxed max-h-24 overflow-y-auto"
							style={{ minHeight: "24px" }}
						/>
						<button
							onClick={send}
							disabled={!input.trim() || loading}
							className="w-8 h-8 rounded-full bg-[#FFB800] disabled:bg-gray-200 flex items-center justify-center shrink-0 transition-colors hover:bg-[#e6a600]"
						>
							<Send className="w-3.5 h-3.5 text-black disabled:text-gray-400" />
						</button>
					</div>
				</div>
			)}

			{/* FAB */}
			<button
				onClick={() => setOpen((v) => !v)}
				className="fixed bottom-6 right-4 sm:right-6 z-50 w-14 h-14 rounded-full bg-[#1F2E2B] shadow-2xl flex items-center justify-center hover:scale-110 transition-transform border-2 border-[#FFB800]"
				aria-label="Chat with NORBILT"
			>
				{open ? (
					<X className="w-6 h-6 text-white" />
				) : (
					<MessageCircle className="w-6 h-6 text-white" />
				)}
				{unread && !open && (
					<span className="absolute -top-1 -right-1 w-4 h-4 bg-[#FFB800] rounded-full border-2 border-white animate-pulse" />
				)}
			</button>
		</>
	);
}

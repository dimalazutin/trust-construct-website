// src/components/ChatWidget.tsx
import React, { useState, useEffect, useRef } from 'react'
import { MessageCircle, X } from 'lucide-react'

interface ChatMessage {
  role: 'user' | 'assistant'
  content: string
}

const ChatWidget: React.FC = () => {
  const [open, setOpen] = useState(false)
  const [input, setInput] = useState('')
  const [messages, setMessages] = useState<ChatMessage[]>([
    { role: 'assistant', content: 'Hello, do you have any questions about Trust Construct?' }
  ])
  const endRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (open) endRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [messages, open])

  const toggleOpen = () => setOpen(v => !v)

  const sendMessage = async () => {
    const text = input.trim()
    if (!text) return

    const newMsgs = [...messages, { role: 'user', content: text }]
    setMessages(newMsgs)
    setInput('')

    try {
      const res = await fetch('/.netlify/functions/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ messages: newMsgs })
      })
      if (!res.ok) throw new Error(`Status ${res.status}`)
      const botMsg: ChatMessage = await res.json()
      setMessages([...newMsgs, botMsg])
    } catch (err) {
      setMessages([
        ...newMsgs,
        { role: 'assistant', content: 'Sorry, something went wrong.' }
      ])
    }
  }

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {open ? (
        <div className="flex flex-col w-80 h-96 bg-white dark:bg-gray-800 shadow-xl rounded-lg overflow-hidden">
          {/* Header */}
          <div className="flex items-center justify-between px-4 py-2 bg-blue-600 text-white">
            <span className="font-semibold">The Trust Construct Bot</span>
            <button onClick={toggleOpen}>
              <X size={18} />
            </button>
          </div>

          {/* Messages */}
          <div className="flex-1 p-3 overflow-y-auto space-y-2">
            {messages.map((m, i) => (
              <div
                key={i}
                className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div
                  className={`max-w-xs px-3 py-2 rounded-lg ${
                    m.role === 'user'
                      ? 'bg-blue-500 text-white'
                      : 'bg-gray-200 dark:bg-gray-700 text-black dark:text-white'
                  }`}
                >
                  {m.content}
                </div>
              </div>
            ))}
            <div ref={endRef} />
          </div>

          {/* Input */}
          <div className="px-3 py-2 border-t dark:border-gray-700">
            <div className="flex">
              <input
                type="text"
                value={input}
                onChange={e => setInput(e.target.value)}
                onKeyDown={e => e.key === 'Enter' && sendMessage()}
                className="flex-1 px-3 py-1 border rounded-l-md focus:outline-none"
                placeholder="Type your question..."
              />
              <button
                onClick={sendMessage}
                className="px-4 bg-blue-600 text-white rounded-r-md hover:bg-blue-700 transition"
              >
                Send
              </button>
            </div>
          </div>
        </div>
      ) : (
        // Floating button
        <button
          onClick={toggleOpen}
          className="p-3 bg-blue-600 text-white rounded-full shadow-lg hover:bg-blue-700 transition"
        >
          <MessageCircle size={24} />
        </button>
      )}
    </div>
  )
}

export default ChatWidget

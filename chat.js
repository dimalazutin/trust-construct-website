import OpenAI from "openai";

export async function handler(event) {
  const { messages } = JSON.parse(event.body);
  const openai = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY,    // ← вот эта переменная появилась в Netlify
  });

  const res = await openai.chat.completions.create({
    model: "gpt-3.5-turbo",
    messages,
    temperature: 0.7,
  });

  return {
    statusCode: 200,
    body: JSON.stringify(res.choices[0].message),
  };
}

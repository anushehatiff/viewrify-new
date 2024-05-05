import google.generativeai as genai
import os

genai.configure(api_key='AIzaSyCPVsYti-ppTUluVaoeG7dMTSbOlIkcKOI')
model = genai.GenerativeModel('gemini-pro')
chat = model.start_chat(history=[])

model = genai.GenerativeModel('gemini-pro')
response_1 = chat.send_message(
      "when was world war 2")
response_2 = chat.send_message(
      "what happened in that event")

print(response_1.text)
print(response_2.text)
import openai
import os

# os.environ["OPEN_API_KEY"] = "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"

# Initialize the OpenAI API client
openai.api_key = "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"

# Example of calling the GPT-3 API
response = openai.Completion.create(
    engine="gpt-3.5-turbo-instruct",
    prompt="Ethnicity: Indian. Gender: Male, Age: 16, Sexuality: Straight, Country of Residence and Citizenship: India, Annual Family Income: 50,000 USD. He is an introverted person with a flair for physics. He likes to spend most of his time reading particle physics theories and trying (with difficulty) to develop his own. He also loves guitar playing and aspires to become the next Amin Toofani. He wants a college experience that's very intimate and close-knit, with a focus on learning rigorous science along with a vibrant arts scene all the while not being too social, loud, or 'party' school-like. So far he has taken the SAT and has a 1490. He has been consistently coming first in his class since grade 8. He has given 7 APs so far  with 5s and 4s in most of them. He has worked on some individual coding project. He had an internship at a major vaccine company, in its finance department. He has published two research papers in financial awareness. He has won the regional physics olympiad twice. However, he wants to explore physics research more formally before college starts. He is also on the swimming team of his school and is avid reader. Please suggest what else he should be doing to maximise his chances of getting into the colleges that will best fit his profile. Also, list those colleges.Give me a reason for each school",
    max_tokens = 3500
)
# Print the generated text
print(response.choices[0].text)
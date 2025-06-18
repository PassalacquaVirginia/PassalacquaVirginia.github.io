import re
import json

# 1. Legge il contenuto del file Markdown
with open("./../md/Quiz.md", "r", encoding="utf-8") as f:
    content = f.read()

# 2. Regex per estrarre tutte le domande e risposte
pattern = r"### Domanda \d+\n\*\*(.*?)\*\*\s*\n((?:- .+\n)+)"
matches = re.findall(pattern, content)

# 3. Costruzione della variabile questions_json
questions_json = []
for question, answers in matches:
    answers_list = [a.strip("- ").strip() for a in answers.strip().split("\n")]
    questions_json.append({
        "question": question.strip(),
        "answers": answers_list,
        "correct": None
    })

# 4. Esportazione in file JSON
with open("questions.json", "w", encoding="utf-8") as f:
    json.dump(questions_json, f, ensure_ascii=False, indent=2)

print("✅ File 'questions.json' creato con successo!")

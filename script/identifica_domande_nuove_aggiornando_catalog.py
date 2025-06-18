import json

# === 1. Carica i due file JSON ===
with open("./../json/file1.json", "r", encoding="utf-8") as f1:
    questions1 = json.load(f1)

with open("./../json/catalog.json", "r", encoding="utf-8") as f2:
    questions2 = json.load(f2)

# === 2. Estrai solo le domande di catalog.json per confronto (in lowercase) ===
questions2_texts = {q["question"].strip().lower() for q in questions2}

# === 3. Trova le domande presenti solo in file1 ===
only_in_file1 = []
i = 0
for q in questions1:
    i += 1
    if q["question"].strip().lower() not in questions2_texts:
        only_in_file1.append(q)

print(f"Numero totale di domande in file1: {i}")
print(f"Numero di domande solo in file1: {len(only_in_file1)}")

# === 4. Aggiungi le nuove domande a catalog.json ===
if only_in_file1:
    questions2.extend(only_in_file1)
    with open("./../json/catalog.json", "w", encoding="utf-8") as f2:
        json.dump(questions2, f2, ensure_ascii=False, indent=2)
    print(f"✅ {len(only_in_file1)} nuove domande aggiunte a 'catalog.json'")
else:
    print("✅ Nessuna nuova domanda da aggiungere.")

# === (Facoltativo) Salva le nuove in un file separato ===
with open("../json/newQuestions.json", "w", encoding="utf-8") as out:
    json.dump(only_in_file1, out, ensure_ascii=False, indent=2)
    print(f"✅ Domande nuove salvate anche in 'newQuestions.json'")

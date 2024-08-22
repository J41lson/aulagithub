print("Andares do hotel (usando for):")
for andar in range(20, 0, -1):
    if andar == 13:
        continue
    print(andar)



print("Andares do hotel (usando while):")
andar = 20
while andar > 0:
    if andar != 13:
        print(andar)
    andar -= 1
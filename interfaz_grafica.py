import tkinter as tk
from tkinter import filedialog

def imprimir_contenido_archivo(ruta_archivo):
    try:
        with open(ruta_archivo, 'r') as archivo:
            contenido = archivo.read()
            return contenido
    except FileNotFoundError:
        return f"El archivo '{ruta_archivo}' no fue encontrado."
    except Exception as e:
        return f"Ocurrió un error: {e}"
    
def abrir_archivo():
    ruta_archivo = "C:/Users/danie/Escritorio/proyecto-git/diarioAlumno/diarioA.txt"
    if ruta_archivo:
        contenido = imprimir_contenido_archivo(ruta_archivo)
        mostrar_contenido_ventana(contenido)

def mostrar_contenido_ventana(contenido):
    ventana = tk.Tk()
    ventana.title("Contenido del archivo")

    etiqueta = tk.Label(ventana, text=contenido, padx=10, pady=10)
    etiqueta.pack()

    ventana.mainloop()

# Ejemplo de uso
abrir_archivo()

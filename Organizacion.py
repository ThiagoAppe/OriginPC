import json

# Función para leer el archivo JSON
def leer_json(archivo):
    with open(archivo, 'r', encoding='utf-8') as f:
        return json.load(f)

# Función para escribir en el archivo JSON
def escribir_json(archivo, datos):
    with open(archivo, 'w', encoding='utf-8') as f:
        json.dump(datos, f, indent=4)

# Función para asignar idUnico y reorganizar los datos por nombre
def asignar_id_unico_y_reordenar(componentes):
    # Definir las categorías basadas en los nombres de los componentes
    categorias = {
        'microprocesadores': ['procesador', 'cpu', 'microprocesador'],
        'motherboards': ['motherboard', 'placa base', 'placa madre'],
        'ram': ['ram', 'memoria', 'memoria ram'],
        'almacenamiento': ['ssd', 'hdd', 'disco duro', 'almacenamiento']
    }
    
    # Crear un diccionario para clasificar los componentes
    clasificados = {categoria: [] for categoria in categorias}
    
    # Clasificar los componentes en las categorías basadas en palabras clave en el nombre
    for componente in componentes:
        asignado = False
        for categoria, palabras_clave in categorias.items():
            if any(palabra in componente['nombre'].lower() for palabra in palabras_clave):
                clasificados[categoria].append(componente)
                asignado = True
                break
        if not asignado:
            clasificados.setdefault('otros', []).append(componente)  # Guardar los que no se asignen

    # Asignar idUnico y reorganizar los datos
    for categoria, lista_componentes in clasificados.items():
        for idx, componente in enumerate(lista_componentes, start=1):
            componente['idUnico'] = idx
            componente['id'] = componente.get('id', idx)  # Si no tiene id, lo asignamos igual que el idUnico

    return clasificados

# Función para actualizar las compatibilidades con los nuevos idUnico
def actualizar_compatibilidades(componentes):
    # Crear un diccionario para obtener el idUnico usando el id
    id_unicos_dict = {}
    for categoria in componentes:
        for componente in componentes[categoria]:
            id_unicos_dict[componente["id"]] = componente["idUnico"]

    # Actualizar las compatibilidades en cada componente
    for categoria in componentes:
        for componente in componentes[categoria]:
            if "compatibilidad" in componente:
                # Si la compatibilidad tiene ids de procesadores o motherboards, los actualizamos
                if "procesadores_compatibles_id" in componente["compatibilidad"]:
                    componente["compatibilidad"]["procesadores_compatibles_id"] = [
                        id_unicos_dict.get(id, id) for id in componente["compatibilidad"]["procesadores_compatibles_id"]
                    ]
                if "motherboards_compatibles_id" in componente["compatibilidad"]:
                    componente["compatibilidad"]["motherboards_compatibles_id"] = [
                        id_unicos_dict.get(id, id) for id in componente["compatibilidad"]["motherboards_compatibles_id"]
                    ]
    return componentes

# Ruta del archivo JSON (reemplaza con la ruta correcta)
archivo_json = 'database.json'  # Aquí deberías poner el nombre o la ruta del archivo

# Leer los componentes desde el archivo JSON
componentes = leer_json(archivo_json)

# Asignar idUnico y reorganizar los datos
componentes_clasificados = asignar_id_unico_y_reordenar(componentes)

# Actualizar las compatibilidades
componentes_actualizados = actualizar_compatibilidades(componentes_clasificados)

# Escribir los componentes actualizados de vuelta al archivo JSON
escribir_json(archivo_json, componentes_actualizados)

print("El archivo JSON ha sido actualizado con éxito.")

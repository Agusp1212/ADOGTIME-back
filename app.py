from flask import Flask, request, jsonify
from flask_sqlalchemy import SQLAlchemy

from flask_cors import CORS

app = Flask(__name__)
CORS(app)

app.config['SQLALCHEMY_DATABASE_URI'] = 'mysql+mysqlconnector://ADOGTIME:root12345@ADOGTIME.mysql.pythonanywhere-services.com/ADOGTIME$default'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False

db = SQLAlchemy(app)

class Persona(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    nombre = db.Column(db.String(50))
    especialidad = db.Column(db.String(100))
    ubicacion = db.Column(db.String(100))
    descripcion = db.Column(db.String(200))
    telefono = db.Column(db.String(20))

with app.app_context():
    db.create_all()

@app.route("/")
def index():
    return "App web de adopcion"
    #return render_template('index.html')



@app.route("/registro", methods=['POST'])
def registro():
    nombre_recibido = request.json["nombre"]
    especialidad_recibida = request.json["especialidad"]
    ubicacion_recibida = request.json["ubicacion"]
    descripcion_recibida = request.json["descripcion"]
    telefono_recibido = request.json["telefono"]

    nuevo_registro = Persona(nombre=nombre_recibido, especialidad=especialidad_recibida, ubicacion=ubicacion_recibida, descripcion=descripcion_recibida, telefono=telefono_recibido)
    db.session.add(nuevo_registro)
    db.session.commit()

    return "Solicitud de post recibida"

@app.route("/personas",  methods=['GET'])
def personas():
    all_registros = Persona.query.all()

    data_serializada = []

    for registro in all_registros:
        data_serializada.append({"id":registro.id, "nombre":registro.nombre, "especialidad":registro.especialidad, "ubicacion":registro.ubicacion, "descripcion":registro.descripcion, "telefono":registro.telefono})

    return jsonify(data_serializada)

@app.route('/update/<id>', methods=['PUT'])
def update(id):
    update_persona = Persona.query.get(id)

    nombre = request.json["nombre"]
    especialidad = request.json["especialidad"]
    ubicacion = request.json["ubicacion"]
    descripcion = request.json["descripcion"]
    telefono = request.json["telefono"]

    update_persona.nombre = nombre
    update_persona.especialidad = especialidad
    update_persona.ubicacion = ubicacion
    update_persona.descripcion = descripcion
    update_persona.telefono = telefono

    db.session.commit()

    data_serializada = [{"id": update_persona.id, "nombre": update_persona.nombre, "especialidad":update_persona.especialidad, "ubicacion":update_persona.ubicacion, "descripcion":update_persona.descripcion, "telefono":update_persona.telefono}]

    return jsonify(data_serializada)


@app.route('/borrar/<id>', methods=['DELETE'])
def borrar(id):
    delete_persona = Persona.query.get(id)

    db.session.delete(delete_persona)
    db.session.commit()

    data_serializada = [{"id": delete_persona.id, "nombre": delete_persona.nombre, "especialidad":delete_persona.especialidad, "ubicacion":delete_persona.ubicacion, "descripcion":delete_persona.descripcion, "telefono":delete_persona.telefono}]

    return jsonify(data_serializada)

if __name__ == "__main__":
    app.run(debug=True)
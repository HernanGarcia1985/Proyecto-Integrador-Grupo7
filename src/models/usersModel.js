const fs = require('fs');
const path = require('path');

const usersFilePath = path.join(__dirname, '../data/usuarios-pet.json');


const User = {
	fileName: usersFilePath,

	leerBD: function () {
		return JSON.parse(fs.readFileSync(this.fileName, 'utf-8'));
	},

	generarId: function () {
		let todosLosUsuarios = this.encontrarTodos();
		let ultimoUsuario = todosLosUsuarios.pop();
		if (ultimoUsuario) {
			return ultimoUsuario.id + 1;
		}
		return 1;
	},

	encontrarTodos: function () {
		return this.leerBD();
	},

	buscarPorPK: function (id) {
		let todosLosUsuarios = this.encontrarTodos();
		let usuarioEncontrado = todosLosUsuarios.find(unUsuario => unUsuario.id === id);
		return usuarioEncontrado;
	},

	buscarPorEmail: function (email) {
		let todosLosUsuarios = this.encontrarTodos();
		let usuarioEncontrado = todosLosUsuarios.find(unUsuario => unUsuario['email'] === email);
		return usuarioEncontrado;
	},

	crear: function (userData) {
		let todosLosUsuarios = this.encontrarTodos();
		let nuevoUsuario = {
			id: this.generarId(),
			...userData
		}
		todosLosUsuarios.push(nuevoUsuario);
		fs.writeFileSync(this.fileName, JSON.stringify(todosLosUsuarios, null,  ' '));
		return nuevoUsuario;
	},

	borrar: function (id) {
		let todosLosUsuarios = this.encontrarTodos();
		let usuariosDefinitivos = todosLosUsuarios.filter(unUsuario => unUsuario.id !== id);
		fs.writeFileSync(this.fileName, JSON.stringify(usuariosDefinitivos, null, ' '));
		return true;
	}
}

module.exports = User;
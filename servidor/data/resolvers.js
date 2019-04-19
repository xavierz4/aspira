import mongoose from 'mongoose';
import {Elector} from './db';
import {rejects} from 'assert';

export const resolvers = {
    Query: {

        getElectores: (root, {limite}) => {
            return Electores.find({}).limit(limite)

        },

        getElector: (root, {id}) => {
            return new Promise((resolve, object) =>{
                Electores.findById(id,(error, elector) =>{
                    if(error) rejects(error)
                    else resolve(elector)
                });
            })
            return new Elector (id, electorDB[id]);

        },
    },
    Mutation:{
        crearElector : (root, {input}) => {
            const nuevoCliente = new Electores({
               
                nombre : input.nombre,
                apellido : input.apellido,
                cedula : input.empresa,
                edad : input.edad,
                genero : input.genero,
                email : input.email,
                rol : input.rol,
                pedidos : input.pedidos

            });
            nuevoElector.id = nuevoElector._id;

            return new Promise((resolve, object) => {
                nuevoElector.save((error) => {
                    if(error) rejects (error)
                    else resolve(nuevoElector)
                })
            });
      
        },

        actualizarElector : (root, {input}) => {
            return new Promise((resolve, object) => {
                Electores.findOneAndUpdate({_id: input.id}, input, {new: true}, (error, elector) =>
                {
                    if(error) rejects (error)
                    else resolve (elector)
                });
                
            });

            
            },

        eliminarElector : (root, {id}) => {
        return new Promise((resolve, object) => {
            Electores.findOneAndRemove({_id: id}, (error) =>
            {
                if(error) rejects (error)
                else resolve ("se Elimino Correctamente")
            })
            
        });
            
        }
    
    }
    }

import mongoose from 'mongoose';
import {Electores} from './db';
import {rejects} from 'assert';

export const resolvers = {
    Query: {

        getElectores: (root, {limite, offset}) => {
            return Electores.find({}).limit(limite).skip(offset)

        },

        getElector: (root, {id}) => {
            return new Promise((resolve, object) =>{
                Electores.findById(id,(error, elector) =>{
                    if(error) rejects(error)
                    else resolve(elector)
                });
            });
            

        },
        totalElectores : (root) => {
            return new Promise((resolve, object) =>{
                Electores.countDocuments({},(error, count) => {
                    if(error) rejects(error) 
                    else resolve(count)
                })
            })

        }
    },
    Mutation:{
        crearElector : (root, {input}) => {
            const nuevoElector = new Electores({
               
                nombre : input.nombre,
                apellido : input.apellido,
                cedula : input.cedula,
                edad : input.edad,
                genero : input.genero,
                email: input.email
                

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
            Electores.findOneAndDelete({_id: id}, (error) =>
            {
                if(error) rejects (error)
                else resolve ("se Elimino Correctamente")
            })
            
        });
            
        }
    
    }
    }

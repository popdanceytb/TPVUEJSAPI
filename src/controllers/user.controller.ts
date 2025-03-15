import { Request, Response } from 'express';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

// Ajouter un utilisateur
export const addUser = async (req: Request, res: Response) => {
    try {
        const { name, email } = req.body;
        if (!name || !email) {
            res.status(400).json({ message: "Nom et email requis" });
            return;
        }

        const user = await prisma.user.create({ data: { name, email } });

        res.status(201).json(user);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Erreur serveur" });
    }
};

// Récupérer tous les utilisateurs
export const getUsers = async (req: Request, res: Response) => {
    try {
        const users = await prisma.user.findMany();
        res.status(200).json(users);
    } catch (error) {
        res.status(500).json({ message: "Erreur serveur" });
    }
};

// Récupérer un utilisateur par ID
export const getUser = async (req: Request, res: Response) => {
    try {
        const user = await prisma.user.findUnique({ where: { id: Number(req.params.id) } });

        if (!user) {
            res.status(404).json({ message: "Utilisateur non trouvé" });
            return;
        }

        res.json(user);
    } catch (error) {
        res.status(500).json({ message: "Erreur serveur" });
    }
};

// Mettre à jour un utilisateur
export const updateUser = async (req: Request, res: Response) => {
    try {
        const user = await prisma.user.update({
            where: { id: Number(req.params.id) },
            data: req.body,
        });

        res.json(user);
    } catch (error) {
        res.status(500).json({ message: "Erreur serveur" });
    }
};

// Supprimer un utilisateur
export const deleteUser = async (req: Request, res: Response) => {
    try {
        await prisma.user.delete({ where: { id: Number(req.params.id) } });
        res.status(204).send();
    } catch (error) {
        res.status(500).json({ message: "Erreur serveur" });
    }
};

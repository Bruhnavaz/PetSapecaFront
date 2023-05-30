import { useMutation } from "@tanstack/react-query";

const createProdutos = async (produto) => {
  const res = await fetch("https://api-grupocinco.onrender.com/item", {
    method: "POST",
    body: JSON.stringify(produto),
    headers: {
      "Content-Type": "application/json",
    },
  });

  return res.json();
}

export const useUsers = () => {
    return useMutation(createProdutos)
}

const deleteProdutos = async (id) => {
  const res = await fetch(`http://localhost:3000/users/${id}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
  });

  return res.json()
}

export const useDeleteUser = () => {
  return useMutation(deleteProdutos)
}

const updateProduto = async (produto) => {
  const res = await fetch(`http://localhost:3000/users/${produto.id}`, {
    method: "PUT",
    body: JSON.stringify(produto),
    headers: {
      "Content-Type": "application/json",
    },
  });

  return res.json()
}

export const useUpdateProduto = () => {
  return useMutation(updateProduto)
}
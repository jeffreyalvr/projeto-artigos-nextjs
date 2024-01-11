"use client";
import { useFormStatus } from "react-dom";

const SubmitButton = () => {
  const { pending } = useFormStatus();
  return (
    <button
      type="submit"
      disabled={pending}
      className="px-4 py-2 rounded-lg text-center bg-black text-white hover:opacity-85 disabled:bg-zinc-700"
    >
      {pending ? "Criando..." : "Criar"}
    </button>
  );
};

export default SubmitButton;

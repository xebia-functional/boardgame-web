import { useState } from 'react';
import axios from 'axios';

interface PlayerForm {
    name: string;
    nickname: string;
}

interface Props {
    onClose: () => void;
    onPlayerCreated: () => Promise<void>;
}

export default function CreatePlayerModal({ onClose, onPlayerCreated }: Props) {
    const [formData, setFormData] = useState<PlayerForm>({ name: '', nickname: '' });
    const [error, setError] = useState<string | null>(null);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
            await axios.post('http://localhost:8080/players/', formData);
            await onPlayerCreated();
            onClose();
        } catch (error) {
            console.error(error);
            setError('Error al crear jugador');
        }
    };

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-white p-6 rounded shadow-lg w-96">
                <h2 className="text-xl font-bold mb-4">New Player</h2>
                <form onSubmit={handleSubmit} className="space-y-4">
                    <input
                        name="name"
                        placeholder="Name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full border px-3 py-2 rounded"
                    />
                    <input
                        name="nickname"
                        placeholder="Nickname"
                        value={formData.nickname}
                        onChange={handleChange}
                        required
                        className="w-full border px-3 py-2 rounded"
                    />
                    {error && <p className="text-red-500">{error}</p>}
                    <div className="flex justify-end space-x-2">
                        <button
                            type="button"
                            onClick={onClose}
                            className="px-4 py-2 rounded bg-gray-300"
                        >
                            Cancelar
                        </button>
                        <button
                            type="submit"
                            className="px-4 py-2 rounded bg-blue-600 text-white hover:bg-blue-700"
                        >
                            Crear
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}

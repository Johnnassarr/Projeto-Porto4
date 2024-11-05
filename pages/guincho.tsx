import styles from "./guincho.module.css";
import React, { useState } from 'react';
import axios from 'axios';
import Link from "next/link"

export default function Guincho() {
    const [cep, setCep] = useState('');
    const [endereco, setEndereco] = useState({
        logradouro: '',
        bairro: '',
        localidade: '',
        uf: ''
    });
    const [guinchoMensagem, setGuinchoMensagem] = useState('');

    const handleCepChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setCep(event.target.value);
    };

    const buscarEndereco = () => {
        // Verifica se o CEP possui 8 dígitos antes de fazer a chamada à API
        if (cep.length === 8) {
            axios.get(`https://viacep.com.br/ws/${cep}/json/`)
                .then(response => {
                    // Verifica se a resposta contém o endereço
                    if (response.data) {
                        setEndereco({
                            logradouro: response.data.logradouro || '',
                            bairro: response.data.bairro || '',
                            localidade: response.data.localidade || '',
                            uf: response.data.uf || ''
                        });
                        setGuinchoMensagem('O guincho está a caminho do local!');
                    }
                })
                .catch(error => {
                    console.error("Erro ao buscar o CEP:", error);
                    setEndereco({ logradouro: '', bairro: '', localidade: '', uf: '' });
                    setGuinchoMensagem('Erro ao buscar o CEP. Tente novamente.');
                });
        } else {
            setEndereco({ logradouro: '', bairro: '', localidade: '', uf: '' }); 
            setGuinchoMensagem('Por favor, insira um CEP válido.');
        }
    };

    return (
        <div className={styles.container}>
            <h1>Chamar Guincho</h1>
            <div className={styles.inputContainer}>
            <Link href="/home" className="link-home">Voltar ao início</Link>
                <input
                    type="text"
                    placeholder="Digite seu CEP"
                    value={cep}
                    onChange={handleCepChange}
                    maxLength={8} 
                />
                <button onClick={buscarEndereco} className={styles.btn}>
                    Pesquisar
                </button>
            </div>
            <div className={styles.info}>
                <h2>Endereço:</h2>
                <p>CEP: {cep}</p>
                <p>Rua: {endereco.logradouro}</p>
                <p>Bairro: {endereco.bairro}</p>
                <p>Localidade: {endereco.localidade}</p>
                <p>UF: {endereco.uf}</p>
            </div>
            {guinchoMensagem && <p className={styles.mensagem}>{guinchoMensagem}</p>}
        </div>
    );
}

import React, { useState } from 'react';
import styles from './styles.css';
import { Buffer } from 'buffer';
import Tooltip from '@mui/material/Tooltip';
import MicIcon from '@mui/icons-material/Mic';
import SendIcon from '@mui/icons-material/Send';
import axios from 'axios';
import { useHistory } from 'react-router-dom';
import { useSpeechSynthesis } from 'react-speech-kit';
import Avatar from '@mui/material/Avatar';
import IconChatBot from '../icons/chatbot.svg';
import SpeechRecognition, {
  useSpeechRecognition,
} from 'react-speech-recognition';

export default function Prometeus() {
  const history = useHistory();
  const [open, setOpen] = useState(false);
  const [texto, setTexto] = useState('');
  const [resposta, setResposta] = useState('Seja Bem-vindo, eu sou o seu Atendente VIrtual. 🥰');
  const { speak } = useSpeechSynthesis();
  const [teste, setTeste] = useState();
  const [msgTela, setMsgTela] = useState();

  const key = 'Yl6K0tho7FQWSxNUMsPo54UmdHEuJtWL0dP224AZCcJp';
  const encodedString = Buffer.from(`apikey:${key}`).toString('base64');

  const enviarTextoParaChatbot = () => {
    axios
      .post(
        `https://api.us-south.assistant.watson.cloud.ibm.com/instances/bdf7002d-98ba-487e-8916-1abf5af9654c/v1/workspaces/b64ebb22-4e8c-4560-a5ed-db7846e3b74a/message?version=2018-09-20`,
        { input: { text: transcript  } },
        {
          headers: {
            Authorization: `Basic ${encodedString}`,
            'Content-Type': 'application/json',
          },
        }
      )
      .then((res) => {
        let resp = res.data.output.text;
        setResposta(resp);
        speak({ text: resp });
      })
      .catch((err) => {
        alert(err);
      });
  };

  const commands = [
    {
      command: 'limpar tela',
      callback: ({ resetTranscript }) => {
        resetTranscript();
        setResposta('');
      },
    },
    {
      command: 'criar *',
      callback: (site) => {
        // link para sua pagina cadastro
        ;
      },
    },
    {
      command: 'ver *',
      callback: (site) => {
         // link para algum lugar
      },
    },
  ];

  const {
    transcript,
    listening,
    resetTranscript,
    browserSupportsSpeechRecognition,
  } = useSpeechRecognition({ commands });

  const ouvir = () => {
    !teste
      ? SpeechRecognition.startListening()
      : SpeechRecognition.stopListening();
    setTeste((teste) => !teste);
  };

  const enviarMsg = () => {
    setMsgTela(transcript ? transcript : texto);
    enviarTextoParaChatbot();
  };

  return (
    <>
      {!open ? (
        <button  class="buttonChat"
          onClick={() => setOpen((open) => !open)}
        >
        abrir chat
        </button>
      ) : (
        <div className="chatContainer">
          {/* header */}
          <div className="header">
            <button class="buttonChat" onClick={() => setOpen((open) => !open)}>
              fechar
            </button>
            <h4>ChatBot </h4>
          </div>
          {/* message */}
          <div className="chatConteudo">
            <div className="chatbot">
              <Tooltip title="Deucalion" sx={{ marginRight: '10px' }}>
                <Avatar alt="Deucalion" src={IconChatBot} />
              </Tooltip>
              <div className="resposta">
                <p id="h1-text">
                  {resposta.length !== 0
                    ? resposta
                    : 'Não entendi, Tente reformular a frase para que eu possa compreender'}
                </p>
              </div>
            </div>

            <div className="question">
              <p>{msgTela ? msgTela : '...'}</p>
            </div>
          </div>

          {/* botoes */}
          <div className="containerSend">
            {transcript ? (
              <input value={transcript} onChange={resetTranscript} />
            ) : (
              <input onChange={(e) => setTexto(e.target.value)} value={texto} />
            )}

            {listening ? (
              <button className="btn btn-red" onClick={ouvir}>
                <MicIcon fontSize="small"/>
              </button>
            ) : (
              <button className="btn mic" onClick={ouvir}>
                <MicIcon fontSize="small"/>
              </button>
            )}

            <button
              className="btn send"
              onClick={() => {
                enviarMsg();
              }}
            >
              <SendIcon fontSize="small" />
            </button>
          </div>
        </div>
      )}
    </>
  );
}

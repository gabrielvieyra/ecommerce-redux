import { FC, useState, useEffect } from 'react';

// Styles
import './styles.scss';

// Interfaces
import { Candidate } from '../../types/types';

import api from '../../api';

const STEPS: Array<Candidate['step']> = [
  'Entrevista inicial',
  'Entrevista tecnica',
  'Oferta',
  'Asignacion',
  'Rechazo',
];

const CloneJira: FC = () => {
  const [candidates, setCandidates] = useState<Array<Candidate>>([]);

  useEffect(() => {
    api.candidates.list().then(candidates => setCandidates(candidates));
  }, []);

  // Agregar un candidato
  function addCandidate(): void {
    const candidate = window.prompt('Nombre del candidato');
    const comments = window.prompt('Comentarios del candidato') || '';

    // Si el usuario no agrega ningun candidato retorno un return para que no siga con la ejecucion de la funcion
    if (!candidate) {
      return;
    }

    const newCandidate: Candidate = {
      id: String(+new Date()),
      name: candidate,
      comments: comments,
      step: 'Entrevista inicial',
    };

    setCandidates([...candidates, newCandidate]);
  }

  // Editar un candidato
  // Lo que hace esta funcion es que cuando presionas alguno de los botonos va a editar el candidato para actualizarle el step al que tiene que ir
  function updateCandidate(id: Candidate['id'], partial: Partial<Candidate>): void {
    setCandidates(
      candidates.map(candidate =>
        candidate.id === id
          ? {
              ...candidate,
              ...partial,
            }
          : candidate
      )
    );
  }

  return (
    <main className='columns'>
      {STEPS.map((step, index) => {
        return (
          <section key={step} className='columns__column'>
            <h1>{step}</h1>
            {candidates
              .filter(candidate => candidate.step === step)
              .map(candidate => {
                return (
                  <article key={candidate.id} className='columns__column-card'>
                    <div>
                      <p className='columns__column-card-candidate'>{candidate.name}</p>
                      {candidate.comments && (
                        <p
                          onClick={() =>
                            updateCandidate(candidate.id, {
                              comments:
                                window.prompt('comentarios del candidato', candidate.comments) ||
                                '',
                            })
                          }
                          className='columns__column-card-comments'
                        >
                          {candidate.comments}
                        </p>
                      )}
                    </div>
                    <div>
                      {index > 0 && (
                        <button
                          onClick={() =>
                            updateCandidate(candidate.id, {
                              step: STEPS[index - 1],
                            })
                          }
                        >{`<`}</button>
                      )}
                      {index < STEPS.length - 1 && (
                        <button
                          onClick={() =>
                            updateCandidate(candidate.id, {
                              step: STEPS[index + 1],
                            })
                          }
                        >{`>`}</button>
                      )}
                    </div>
                  </article>
                );
              })}
            {index === 0 && <button onClick={addCandidate}>Agregar candidato</button>}
          </section>
        );
      })}
    </main>
  );
};

export default CloneJira;

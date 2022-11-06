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

  return (
    <main className='columns'>
      {STEPS.map(step => {
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
                        <p className='columns__column-card-comments'>{candidate.comments}</p>
                      )}
                    </div>
                    <div>
                      <button>{`<`}</button>
                      <button>{`>`}</button>
                    </div>
                  </article>
                );
              })}
          </section>
        );
      })}
    </main>
  );
};

export default CloneJira;

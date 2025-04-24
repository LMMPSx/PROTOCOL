import './styles.css'

interface ContentProps {
    section: string;
}

export function Content({ section }: ContentProps) {
    return (
        <div>
            {section === "default" && (

                <div className="container">
                    <p className='contentText'>
                        Aqui você aprenderá a realizar um treino Upper/Lower
                        cujo o foco é construir carne de verdade e aumentar a sua
                        força. Neste estilo de treino você terá um aumento rápido
                        da força e para que isso aconteça, deve respeitar
                        atentamente os descansos. Evite ao máximo realizar mais
                        séries que o planejado ou introduzir técnicas que
                        aumentem o volume, isso pode gerar uma fadiga no seu
                        SNC e afetar o rendimento nos próximos treinos. Portanto,
                        siga tudo a risca!
                    </p>

                    <p className='contentText'>
                        O treino Upper/Lower é focado em dividir os treinos entre
                        membros superiores e inferiores, garantindo equilíbrio e
                        eficiência no ganho de força e massa muscular.
                    </p>

                    <p className='contentText'>
                        O estilo High Intensity é ideal para quem busca treinos
                        curtos e intensos, maximizando o esforço em cada série
                        para obter resultados rápidos e consistentes.
                    </p>
                </div>

            )}
            {section === "explanation" && (

                <div className="container">
                    <p className='contentText'>
                        Faça o número de Feeder Sets que achar necessário, no
                        treino estão entre 1 a 3 feeders variando de 3 a 5
                        repetições. Porém se for realizar mais que 3 Feeders nos
                        exercícios, evite realizar mais que 5 repetições, para não
                        gerar fadiga antes de realizar a série de trabalho (WS).
                    </p>

                    <p className='contentText'>
                        As WS (working sets) são as mais importantes do seu
                        treino, pois nelas você irá realizar as progressões de
                        cargas. A cada sessão de treino deve subir o número de
                        repetições (pelo menos 1 rep.) ou o número de carga (pelo
                        menos 1% mais pesado que o treino anterior).
                    </p>

                    <p className='contentText'>
                        Perceba que os exercícios quase não repetem a cada
                        sessão , eles mudam dando um ciclo total de 12 dias até
                        realizar a mesma sessão. Assim, você deve encarar o treino
                        como se fosse único e não pode vacilar!
                    </p>

                    <p className='contentText'>
                        Tudo no seu treino é calculado de acordo com as WS, veja
                        a seguir como funciona tudo.
                    </p>
                </div>

            )}
            {section === "workoutInfo" && (

                <div className="container">
                    <p className='contentText'>
                        FEEDER SETS (FS): Séries de reconhecimento. O objetivo
                        nas FS é aumentar a carga a cada série dentro das
                        repetições (reps) propostas para buscar a série de trabalho
                        seguinte, sendo elas as séries de preparação. Não pode
                        chegar na falha, sempre deixe algumas reps na reserva.
                        Na feeder você utiliza as cargas entre 50% a 90%.
                    </p>

                    <p className='contentText'>
                        Nos primeiros exercícios (e alguns exercícios livres) temos
                        um maior número de FS pois o corpo ainda está se
                        preparando para o treino inteiro. Então, pode chegar até 4
                        séries feeder sets.
                    </p>

                    <p className='contentText'>
                        Cálculo de Feeder Set (FS) baseado na carga a ser
                        utilizada na WS
                    </p>

                    <p className='contentText'>
                        Se forem 3FS no exercício
                    </p>

                    <ul>
                        <li className='list'>
                            Primeira FS - 50%
                        </li>
                        <li className='list'>
                            Segunda FS - 70%
                        </li>
                        <li className='list'>
                            Terceira FS - 85~90%
                        </li>
                    </ul>

                    <p className='contentText'>
                        Se forem 2FS no exercício
                    </p>

                    <ul>
                        <li className='list'>
                            Primeira FS - 70%
                        </li>
                        <li className='list'>
                            Segunda FS - 85~90%
                        </li>
                    </ul>

                    <p className='contentText'>
                        Se for 1FS no exercício
                    </p>

                    <ul>
                        <li className='list'>
                            Primeira FS - 85%
                        </li>
                    </ul>

                    <p className='contentText'>
                        Obs: As porcentagens sempre serão calculadas com a
                        carga de trabalho (WS)
                    </p>

                    <p className='contentText'>
                        WORKING SETS (WS): Séries de trabalho. É nessa série que
                        você irá utilizar a carga max do dia dentro do número de
                        repetições (reps) propostas. A carga deve estar pesada a
                        ponto da última rep ser difícil de realizar. De o seu melhor
                        nessas séries.
                    </p>

                    <p className='contentText'>
                        Você só deve progredir a carga quando os requisitos
                        abaixo estiverem 100%:
                    </p>

                    <ul>
                        <li className='list'>
                            Controle da carga
                        </li>
                        <li className='list'>
                            2 reps de folga (se são 8 reps na série, deve fazer 10 reps
                        </li>
                        <li className='list'>
                            para subir a carga na próxima semana)
                        </li>
                        <li className='list'>
                            Feeling do dia (tem dias que não está bom para treinar,portanto respeite isso)
                        </li>
                        <li className='list'>
                            Reps limpas (sem roubar no movimento)
                        </li>
                    </ul>

                    <p className='contentText'>
                        Quando devo subir a carga?
                    </p>

                    <p className='contentText'>
                        A carga só deve ser aumentada se os requisitos acima
                        estiverem 100% e na próxima sessão de treino. Isso
                        mesmo, não deve subir a carga no mesmo dia, pois o
                        número de repetições podem cair.
                    </p>

                    <p className='contentText'>
                        Então, se tu fez 100kg na remada para 10 reps limpas em
                        todas as WS, inicie a próxima sessão de treino (próxima
                        semana) com 1% ou 5% a mais na WS.
                    </p>

                    <p className='contentText'>
                        Assim o número de repetições não cairão drasticamente e
                        você conseguirá estar recuperado suficientemente para
                        treinar pesado novamente.
                    </p>

                    <p className='contentText'>
                        TOP SET: Quando estiver escrito "top set", significa que a
                        carga da série deve ser maior que a realizada
                        anteriormente. Não tenha ego inflado!
                    </p>

                    <p className='contentText'>
                        Ela é uma série calculada de 2 formas:
                    </p>

                    <ul>
                        <li className='list'>
                            Exercícios livres - calcule 1% a 5% a mais que a carga
                            realizada na WS. Então se você fez 100kg na WS, na top
                            set pode realizar entre 101 kg a 105 kg. Deve ficar dentro
                            da faixa de reps propostas.
                        </li>
                        <p></p>
                        <li className='list'>
                            Máquinas - calcule 5% a 10% da carga feita na WS. Então
                            se você fez 100kg na WS, na top set pode realizar entre
                            105 kg a 110 kg. Deve ficar dentro da faixa de reps
                            propostas.
                        </li>
                    </ul>

                    <p className='contentText'>
                        BACK OFF: Pegue o maior peso feito na série anterior e
                        multiplique pela porcentagem informada.
                    </p>

                    <p className='contentText'>
                        Exemplo:
                    </p>

                    <ul>
                        <li className='list'>
                            Back off 90% - Realizei 100 kgs na WS, logo 100 x 0,9 =
                            90 kgs. Portanto, irei fazer a back off com 90 kgs.
                        </li>
                    </ul>

                    <p className='contentText'>
                        REST PAUSE: Faça até a falha, descanse 20 segundos e
                        repita a série até falhar novamente.
                    </p>

                    <p className='contentText'>
                        AMPLITUDE: Todos os exercícios devem ser realizados com
                        amplitude total, principalmente os agachamentos ou
                        exercícios em máquinas.
                    </p>

                    <p className='contentText'>
                        DELOAD: O deload pode ser feito a cada vez que finalizar a
                        sequência da planilha (após terminar o B3) ou então de
                        forma programada. Neste último caso, precisa entender
                        como o seu corpo funciona ao decorrer dos treinos.
                    </p>

                    <p className='contentText'>
                        Em muitos casos não é necessário, só de descansar 1 ou 2
                        dias a mais que o previsto já recupera o corpo. Mas quando
                        não for o caso e esteja com o SNC frito, pode treinar 2 dias
                        na semana e realizar o cardio nos outros dias. Essa é uma
                        alternativa válida, mas repetindo, respeite o seu corpo
                        durante todo o processo.
                    </p>

                    <p className='contentText'>
                        ORDEM DO TREINO E DIAS DA SEMANA: Com este treino
                        você poderá treinar 3, 4 ou 5 dias da semana. Tudo
                        dependerá do seu tempo disponível. E obviamente, da sua
                        dedicação em cada série que realizar.
                    </p>

                    <p className='contentText'>
                        TEMPO DE DESCANSO: FEEDER SET entre 1 a 3 min e
                        SÉRIES DE TRABALHO (cluster, ws, rest pause, back off
                        etc) 3 a 5 min.
                    </p>

                </div>
            )}
        </div>
    )
}
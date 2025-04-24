/* eslint-disable jsx-a11y/anchor-is-valid */
import './styles.css'

interface LinkProps {
    onSectionChange: (section: string) => void;
}

export function Links({ onSectionChange }: LinkProps) {
    return (
        <div className="center-align">
            <ul>
                <div className='separator'>
                    <li>
                        <a className="link" href="#" onClick={() => onSectionChange("default")}>
                            Introdução
                        </a>
                    </li>
                </div>
                <div className='separator'>
                    <li>
                        <a className="link" href="#" onClick={() => onSectionChange("explanation")}>
                            Explicação
                        </a>
                    </li>
                </div>
                <div className='separator'>
                    <li>
                        <a className="link" href="#" onClick={() => onSectionChange("workoutInfo")}>
                            Informações sobre o treino
                        </a>
                    </li>
                </div>
            </ul>
        </div>
    )
}
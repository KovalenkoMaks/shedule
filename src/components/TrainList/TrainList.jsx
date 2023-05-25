import './style.scss';
const TrainList = ({ trains }) => {
    const dayValue = (day) => {
        let shedule = '';
        switch (day) {
            case '1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31':
                shedule = 'Кожного дня';
                break;
            case '1, 3, 5, 7, 9, 11, 13, 15, 17, 19, 21, 23, 25, 27, 29, 31':
                shedule = 'По не парних';
                break;
            case '2, 4, 6, 8, 10, 12, 14, 16, 18, 20, 22, 24, 26, 28, 30':
                shedule = 'По парних';
                break;
            default:
                shedule = day;
                break;
        }
        return shedule;
    };
    return (
        <section >
            {trains.length > 0 ? (
                <ul className='list'>
                    <li className="list__item">
                        <p className='text train-number'>№ поїзда</p>
                        <p className='text from-to'>Звідки / Куди</p>
                        <p className='text date'>Дата</p>
                        <div className='text time'>
                            <p>Відправлення / Прибуття</p>
                        </div>
                    </li>
                    {trains.map((e) => {
                        return (
                            <li key={e.id} className="list__item">
                                <p className='text'>{e.train}</p>
                                <div className='text'>
                                    <p>{e.Departure} / {e.Arrival}</p>
                                    <p></p>
                                </div>
                                <p className='text'>{dayValue(e.day)}</p>
                                <div className='text time'>
                                    <p>{e.departedAt}</p>
                                    <p>{e.departedAt}</p>
                                </div>
                            </li>
                        );
                    })}
                </ul>
            ) : (
                <p className='not-found'>Упсс...  потягів за даним напрямком не знайдено</p>
            )}
        </section>
    );
};
export default TrainList;

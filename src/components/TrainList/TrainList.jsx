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
        <>
            {trains.length > 0 ? (
                <ul className="list">
                    {trains.map((e) => {
                        return (
                            <li key={e.id} className="list__item">
                                <p>{e.train}</p>
                                <p>
                                    Відправлення: {e.Departure} об {e.departedAt}
                                </p>
                                <p>
                                    Прибуття: {e.Arrival} об {e.arrivalAt}
                                </p>
                                <p>Розклад по днях місяця: {dayValue(e.day)}</p>
                            </li>
                        );
                    })}
                </ul>
            ) : (
                <p>Оберіть потяг qwe</p>
            )}
        </>
    );
};
export default TrainList;

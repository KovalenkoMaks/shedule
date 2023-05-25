import BasicSelect from '../../common/select/Select';
import './style.scss';
import { useState } from 'react';
import { getTrains } from 'components/sevices/api/axios.service';
import { DatePicker, LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import dayjs from 'dayjs';

function Form({ baseValue, setTrains }) {
    const { departureData, arrivalData, setArrivalData, setDepartureData } = baseValue;
    const [departureValue, setDepartureValue] = useState('');
    const [arrivalValue, setArrivalValue] = useState('');
    const [day, setDay] = useState('');

    const onSubmit = async (e) => {
        e.preventDefault();
        const { data } = await getTrains('/api/trains', {
            departureValue,
            arrivalValue,
            day,
        });
        setTrains(data);
    };
    const onChange = ({ target }) => {
        switch (target.name) {
            case 'Відправлення':
                setDepartureValue(target.value);
                break;
            case 'Прибуття':
                setArrivalValue(target.value);
                break;
            default:
        }
    };
    const onDateChange = (e) => {
        let date = dayjs(e).format('DDMMYYYY').slice(0, 2);
        const numericDate = parseInt(date, 10).toString();
        setDay(numericDate);
    };
    const onClick = (e) => {
        let temp = departureValue;
        setDepartureValue(arrivalValue);
        setArrivalValue(temp);
    };
    return (
        <form className="form" onSubmit={onSubmit}>
            <BasicSelect
                className="form__lable"
                value={departureValue}
                baseValue={departureData}
                text={'Відправлення'}
                onChange={onChange}
            />
            <button className="form__btn" type="button" onClick={onClick}>
                ↔️
            </button>
            <BasicSelect
                className="form__lable"
                value={arrivalValue}
                baseValue={arrivalData}
                text={'Прибуття'}
                onChange={onChange}
            />
            <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DatePicker
                    className="form__lable"
                    format="DD.MM.YYYY"
                    label="Оберіть дату"
                    onChange={onDateChange}
                />
            </LocalizationProvider>
            <button type="submit">Пошук</button>
        </form>
    );
}
export default Form;

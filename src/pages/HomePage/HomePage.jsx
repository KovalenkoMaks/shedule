import Form from 'components/Form/Form';
import TrainList from 'components/TrainList/TrainList';
import { get } from 'components/sevices/api/axios.service';
import { useEffect, useState } from 'react';

const HomePage = () => {
    const [departureData, setDepartureData] = useState([]);
    const [arrivalData, setArrivalData] = useState([]);
    const [trains, setTrains] = useState([]);

    useEffect(() => {
        async function fetch() {
            const dep = await get('api/stations/departure');
            setDepartureData(dep.data);
            const arr = await get('api/stations/arrival');
            setArrivalData(arr.data);
        }
        fetch();
    }, []);
    return (
        <>
            <Form
                baseValue={{
                    departureData,
                    setDepartureData,
                    arrivalData,
                    setArrivalData,
                }}
                setTrains={setTrains}
            />
            <TrainList trains={trains} />
        </>
    );
};

export default HomePage;

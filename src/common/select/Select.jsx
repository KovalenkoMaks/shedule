import Box from '@mui/material/Box';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

import { InputLabel } from '@mui/material';

export default function BasicSelect({ baseValue, text, onChange, value }) {
    return (
        <Box className={'select'}>
            <FormControl>
                <InputLabel name={text}>
                    {text}
                </InputLabel>
                <Select

                    label={text}
                    name={text}
                    value={value}
                    onChange={onChange}
                    sx={{
                        minWidth: '150px',
                        color: 'inherit',
                        '& svg': {
                            fill: 'transparent',
                        },
                    }}
                >
                    {baseValue.map((e) => {
                        return (
                            <MenuItem key={e.id} value={e.stations}>
                                {e.stations}
                            </MenuItem>
                        );
                    })}
                </Select>
            </FormControl>
        </Box>
    );
}

import { FC, ChangeEvent } from 'react';
// Children
import { SearchIcon, SearchInput, SearchBar } from './styles/SearchCityStyles';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

interface Props {
    submit: () => void,
    value: string,
    setValue: (arg0: string) => void,
    showResult: boolean
}

const SearchCity:FC<Props> = ({setValue, showResult, submit, value}) => {
    return (
        <>
            <SearchBar showResult={showResult} onSubmit={submit}>
                <SearchInput type="text" value={value} placeholder="Please Enter City"
                    onChange={(e: ChangeEvent<HTMLInputElement>): void => setValue(e.target.value)} 
                />
                <SearchIcon>
                <FontAwesomeIcon icon={faSearch} />
                </SearchIcon>
            </SearchBar>
        </>
    )
}

export default SearchCity;

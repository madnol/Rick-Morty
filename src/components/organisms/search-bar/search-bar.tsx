import { ChangeEvent, FunctionComponent } from 'react';
import classnames from 'classnames';
import './search-bar.styles.scss';

export interface Props {
  value: string;
  setValue: (value: ChangeEvent<HTMLInputElement>) => void;
  className?: string;
}

const SearchBar: FunctionComponent<Props> = ({
  value,
  setValue,
  className,
  ...otherProps
}) => {
  return (
    <div className={classnames('search-bar', className)} {...otherProps}>
      <input
        className="search-bar-input"
        type="text"
        placeholder="search a character... WUBBA LUBBA DUB DUB!"
        value={value}
        onChange={setValue}
      />
    </div>
  );
};

SearchBar.displayName = 'SearchBar';

export default SearchBar;

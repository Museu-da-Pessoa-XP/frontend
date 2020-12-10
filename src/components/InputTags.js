/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable no-use-before-define */
import React from 'react';
import Chip from '@material-ui/core/Chip';
import TextField from '@material-ui/core/TextField';
import Autocomplete, {
  createFilterOptions,
} from '@material-ui/lab/Autocomplete';

const filter = createFilterOptions();

function InputTags() {
  const [value, setValue] = React.useState([]);

  return (
    <Autocomplete
      multiple
      id="input-tags"
      value={value}
      onChange={(event, newValue) => {
        setValue(newValue);
      }}
      filterOptions={(options, params) => {
        const filtered = filter(options, params);

        // Suggest the creation of a new value
        if (params.inputValue !== '') {
          filtered.push(params.inputValue);
        }

        return filtered;
      }}
      getOptionLabel={(option) => option}
      options={tags}
      renderTags={(tagValue, getTagProps) =>
        tagValue.map((option, index) => (
          <Chip label={option} {...getTagProps({ index })} />
        ))
      }
      style={{ width: 500 }}
      renderInput={(params) => (
        <TextField {...params} variant="outlined" placeholder="Tags" />
      )}
    />
  );
}

const tags = [
  'amor',
  'felicidade',
  'escola',
  'estudo',
  'família',
  'viagem',
  'amigos',
  'tristeza',
];

export default InputTags;

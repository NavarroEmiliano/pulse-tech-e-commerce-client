/* eslint-disable react/prop-types */

const InputUploadForm = ({
  type,
  name,
  placeholder,
  handleOnChange,
  value,
  step,
  label,
  min,
  max,
}) => {
  return (
    <div className='flex flex-col'>
      <label className='block' htmlFor={name}>
        {label}
      </label>
      <input
        className='p-1 pl-2 rounded-lg shadow outline-2 outline-pink-600'
        id={name}
        type={type}
        name={name}
        placeholder={placeholder}
        onChange={handleOnChange}
        value={value || ''}
        min={min || ''}
        max={max || ''}
        step={step || ''}
        required
      />
    </div>
  )
}

export default InputUploadForm

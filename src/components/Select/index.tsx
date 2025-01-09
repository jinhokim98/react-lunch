type SelectProps = React.ComponentProps<'select'> & {
  ariaLabel?: string;
  onChange: (value: string) => void;
};

export const Select = ({name, value, className, id, ariaLabel, onChange, children}: SelectProps) => {
  const handleSelect = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const value = event.target.value;
    onChange(value);
  };

  return (
    <select value={value} onChange={handleSelect} name={name} className={className} id={id} aria-label={ariaLabel}>
      {children}
    </select>
  );
};

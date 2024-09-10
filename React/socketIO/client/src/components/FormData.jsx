import PropType from 'prop-types';

export default function FormData({ data }) {
  console.log(data);
  return (
    <div className="form">
      입력해주세요
      {data.fields.map((value) => (
        <>
          <input key={value.name} className={`formData ${value.name}`} placeholder={value.label} />
        </>
      ))}
    </div>
  );
}

FormData.propTypes = {
  data: PropType.object,
};

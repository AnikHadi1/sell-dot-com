// eslint-disable-next-line import/no-anonymous-default-export
export default (WrappedComponent) => {
    const SectionWarper = ({ ...props }) => (
      <div className="px-pad">
        <WrappedComponent {...props} />
      </div>
    );
  
    return SectionWarper;
  };
  
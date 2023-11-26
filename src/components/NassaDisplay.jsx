function NassaDisplay({ nassa }) {
    const loaded = () => {
      return (
        <>
          <h3>{nassa.collection.version}</h3>
          <h3>{nassa.collection.href}</h3>
          <h3> Items</h3>
          {nassa.collection.items.map((coll) => {
            return <h4>{coll.href}</h4>;
          })}
        </>
      );
    };
  
    return <>{loaded()}</>;
  }
  
  export default NassaDisplay;
  
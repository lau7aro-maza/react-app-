
const Item = ({ prod }) => {
    return (
        <div className="Item">
          <div className="Item-ID">ID: {prod.id}</div>
          <div className="ITem-info">
            <div className="Item-title">Name: {prod.name}</div>
            <div className="Item-stock">STOCK: {prod.stock}</div>
            <div className="Item-description">Description:{prod.description}</div>
          </div>
        </div>
    );
};

export default Item
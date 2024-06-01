from flask import Flask, jsonify, request
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

products = [
    {
        'id': 1,
        'name': 'Product 1',
        'company': 'Company A',
        'category': 'Category X',
        'price': 100.0,
        'rating': 4.5,
        'discount': 10,
        'availability': True
    },

]


@app.route('/products', methods=['GET'])
def get_products():
    return jsonify(products)


@app.route('/products/<int:product_id>', methods=['GET'])
def get_product(product_id):
    product = next((p for p in products if p['id'] == product_id), None)
    if product is not None:
        return jsonify(product)
    return jsonify({'error': 'Product not found'}), 404


if __name__ == '__main__':
    app.run(debug=True)

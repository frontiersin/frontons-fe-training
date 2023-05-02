## Products 
> `GET /api/products`

The API returns all products.

| Parameter | Required | Default | Description |
|-----------|-------------|------------| ---- |
| search | `false` | "" | `string` to filter the product's list by. If no value is passed, it will return all the products |
| segementId | `false` |"" | `string` value that corresponds to the ID of a valid segment. If no value is passed, it will return all the products |

Examples:
1. `GET /api/products`

Sample Response:
```
[
  {
    "productName": "Digital editorial office",
    "productId": "01",
    "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur venenatis tellus in diam molestie rutrum. Aenean sed dictum tortor. Morbi consequat quam at ipsum auctor accumsan. Proin ante metus, imperdiet a quam id, pellentesque feugiat elit. Donec consequat nulla.",
    "url": "url1",
    "segmentName": "Office platforms"
  },
  {
    "productName": "Research topic management",
    "productId": "03",
    "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur venenatis tellus in diam molestie rutrum. Aenean sed dictum tortor. Morbi consequat quam at ipsum auctor accumsan. Proin ante metus, imperdiet a quam id, pellentesque feugiat elit. Donec consequat nulla.",
    "url": "http://research-topic-management-app.frontiersin.org",
    "segmentName": "Data"
  },
  ...
]
```
2. `GET /api/products?search=research`

Sample Response:
```
[
  {
    "productName": "Research topic management",
    "productId": "03",
    "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur venenatis tellus in diam molestie rutrum. Aenean sed dictum tortor. Morbi consequat quam at ipsum auctor accumsan. Proin ante metus, imperdiet a quam id, pellentesque feugiat elit. Donec consequat nulla.",
    "url": "http://research-topic-management-app.frontiersin.org",
    "segmentName": "Data"
  },
  ...
]
```
3. `GET /api/products?segmentId=xs2e1`

Sample Response:
```
[
  {
    "productName": "Research topic management",
    "productId": "03",
    "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur venenatis tellus in diam molestie rutrum. Aenean sed dictum tortor. Morbi consequat quam at ipsum auctor accumsan. Proin ante metus, imperdiet a quam id, pellentesque feugiat elit. Donec consequat nulla.",
    "url": "http://research-topic-management-app.frontiersin.org",
    "segmentName": "Data"
  },
  ...
]
```

## Segments
`GET /api/segments`
Returns the list of segments available.

Sample response:
```
[
  {
    "id": "1es23",
    "displayName": "Office platforms",
    "icon": "/icons/ICO_Computer.svg"
  },
  {
    "id":"1xs2e",
    "displayName": "Advanced settings",
    "icon": "/icons/ICO_Cog.svg"
  },
  {
    "id":"xs2e1",
    "displayName": "Data",
    "icon": "/icons/ICO_Servers.svg"
  },
  {
    "id":"xf2e1",
    "displayName": "Business workflows Business workflows Business workflows Business workflows",
    "icon": "/icons/ICO_BusinessWorkflows.svg"
  }
]
```


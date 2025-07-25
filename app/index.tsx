import { View, Text, Image, ScrollView, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/SimpleLineIcons';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

export default function App() {
  const products = [
    {
      id: 1,
      name: 'roupa 1',
      img: 'https://cdn.awsli.com.br/600x700/2587/2587691/produto/236753410/31-ulg560zina.png',
    },
    {
      id: 2,
      name: 'roupa 2',
      img: 'https://acdn-us.mitiendanube.com/stores/003/814/989/products/unioffice-azul-claro-1-e1bc5ba8e1df85d00f17302923328829-1024-1024.jpg',
    },
    {
      id: 3,
      name: 'roupa 3',
      img: 'https://static.riachuelo.com.br/RCHLO/14773988002/portrait/7b16d92e824f5e1199d7680cfaf374fec6b115f1.jpg?imwidth=700',
    },
    {
      id: 4,
      name: 'roupa 4',
      img: 'https://images.tcdn.com.br/img/img_prod/687586/camisa_social_manga_curta_feminina_75_1_d1019237b0e642637c67f9e01ac307b7.jpg',
    },
    {
      id: 5,
      name: 'roupa 5',
      img: 'https://tfdcdd.vtexassets.com/arquivos/ids/159985/camisa-social-elastano-marinho-still.png?v=638258227373230000',
    },
    {
      id: 6,
      name: 'roupa 6',
      img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR1bwImJlhoWSOfyEHG0Kgv7fyeK_FlKrOnSGrfWlDNQwCK0jpk0iCxR1TOxEY9wS2Qa0c&usqp=CAU',
    },
  ];

  return (
    <ScrollView className="bg-white p-4">
      <View className="mb-8">
        <TouchableOpacity className="self-start mb-4">
          <Icon name="arrow-left" size={20} color="#000" />
        </TouchableOpacity>

        <View className="flex-row justify-between items-center">
          <Text className="text-lg font-semibold">Best Dress Collection</Text>
          <View className="flex-row items-center space-x-3">
            <FontAwesome5 name="ticket-alt" size={20} color="#ec4899" solid={false} />
            <FontAwesome5 name="shopping-cart" size={22} color="#ec4899" />
          </View>
        </View>
      </View>

      {/* Filtros */}
      <View className="flex-row flex-wrap gap-2 mb-6">
        {['Category', 'Color', 'Size', 'Price', 'More'].map((filter) => (
          <Text
            key={filter}
            className="px-3 py-1 bg-gray-100 rounded-full text-sm"
          >
            {filter}
          </Text>
        ))}
      </View>

      {/* Grade de Produtos */}
      <View className="flex-row flex-wrap justify-between">
        {products.map((product) => (
          <View
            key={product.id}
            className="w-[48%] mb-4 border rounded-lg overflow-hidden"
          >
            <Image
              source={{ uri: product.img }}
              className="w-full h-36"
              resizeMode="cover"
            />
            <View className="p-2">
              <Text className="text-sm font-medium text-gray-800">
                {product.name}
              </Text>
            </View>
          </View>
        ))}
      </View>
    </ScrollView>
  );
}

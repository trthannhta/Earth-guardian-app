import { ImageSourcePropType } from "react-native";

export interface QuizzData {
  image: ImageSourcePropType;
  ques: string;
  choose: string[];
  ans: number;
}

export const quizzData: { [key: string]: QuizzData[] } = {
  easy: [
    {
      image: require("../assets/env/water1.png"),
      ques: "Môi trường là gì?",
      choose: [
        "Là nơi chúng ta sống, bao gồm cây cối, động vật, không khí và nước.",
        "Chỉ là khu rừng và biển.",
        "Chỉ là thành phố và làng mạc.",
      ],
      ans: 0,
    },
    {
      image: require("../assets/env/water1.png"),
      ques: "Chúng ta cần làm gì để bảo vệ môi trường?",
      choose: [
        "Vứt rác bừa bãi.",
        "Sử dụng tài nguyên một cách tiết kiệm.",
        "Chặt phá cây cối.",
      ],
      ans: 1,
    },
    {
      image: require("../assets/env/water1.png"),
      ques: "Cây xanh giúp ích gì cho môi trường?",
      choose: [
        "Cung cấp bóng mát.",
        "Làm sạch không khí.",
        "Cả hai câu trên đều đúng.",
      ],
      ans: 2,
    },
    {
      image: require("../assets/env/water1.png"),
      ques: "Nước là tài nguyên:",
      choose: ["Vô tận.", "Hạn chế và cần được bảo vệ.", "Không quan trọng."],
      ans: 1,
    },
    {
      image: require("../assets/env/water1.png"),
      ques: "Điều gì sẽ xảy ra nếu chúng ta không tiết kiệm nước?",
      choose: [
        "Không có ảnh hưởng gì.",
        "Nước sẽ hết và chúng ta sẽ gặp khó khăn.",
        "Nước sẽ tự động đầy lên.",
      ],
      ans: 1,
    },
    {
      image: require("../assets/env/water1.png"),
      ques: "Tái chế là gì?",
      choose: [
        "Sử dụng lại những thứ không còn sử dụng được nữa.",
        "Vứt rác đi.",
        "Đốt rác để lấy nhiệt.",
      ],
      ans: 0,
    },
    {
      image: require("../assets/env/water1.png"),
      ques: "Thùng rác màu xanh lá cây thường dùng để đựng loại rác gì?",
      choose: [
        "Rác thải hữu cơ như vỏ trái cây, rau củ.",
        "Rác thải nhựa.",
        "Rác thải kim loại.",
      ],
      ans: 0,
    },
    {
      image: require("../assets/env/water1.png"),
      ques: "Tại sao chúng ta cần bảo vệ động vật hoang dã?",
      choose: [
        "Vì chúng đẹp.",
        "Vì chúng quan trọng đối với hệ sinh thái.",
        "Vì chúng có thể làm thú nuôi.",
      ],
      ans: 1,
    },
    {
      image: require("../assets/env/water1.png"),
      ques: "Việc gì nên làm khi thấy động vật bị thương ngoài tự nhiên?",
      choose: [
        "Bỏ đi và không làm gì.",
        "Chăm sóc chúng và gọi cho cơ quan bảo vệ động vật.",
        "Bắt về nhà nuôi.",
      ],
      ans: 1,
    },
    {
      image: require("../assets/env/water1.png"),
      ques: "Chúng ta nên làm gì để giảm thiểu việc sử dụng túi ni-lông?",
      choose: [
        "Sử dụng túi vải khi đi chợ.",
        "Mua thật nhiều túi ni-lông.",
        "Không cần quan tâm đến vấn đề này.",
      ],
      ans: 0,
    },
  ],
  medium: [
    {
      image: require("../assets/env/water1.png"),
      ques: "Tại sao việc giảm thiểu sử dụng nhựa là quan trọng?",
      choose: [
        "Vì nhựa có thể tái chế dễ dàng.",
        "Vì nhựa mất hàng trăm năm để phân hủy và gây ô nhiễm môi trường.",
        "Vì nhựa không gây hại gì cho môi trường.",
      ],
      ans: 1,
    },
    {
      image: require("../assets/env/water1.png"),
      ques: "Loài động vật nào dưới đây có nguy cơ tuyệt chủng do sự biến đổi khí hậu?",
      choose: ["Gấu Bắc Cực", "Chim sẻ", "Mèo nhà"],
      ans: 0,
    },
    {
      image: require("../assets/env/water1.png"),
      ques: "Tại sao chúng ta cần bảo vệ rừng nhiệt đới?",
      choose: [
        "Vì rừng nhiệt đới không quan trọng.",
        "Vì rừng nhiệt đới cung cấp oxy và là nơi sinh sống của nhiều loài động vật.",
        "Vì rừng nhiệt đới là nơi chúng ta có thể cắm trại.",
      ],
      ans: 1,
    },
    {
      image: require("../assets/env/water1.png"),
      ques: "Những hành động nào dưới đây giúp giảm thiểu lượng khí CO2?",
      choose: [
        "Đi xe đạp thay vì đi ô tô.",
        "Sử dụng bóng đèn sợi đốt.",
        "Để đèn sáng cả ngày.",
      ],
      ans: 0,
    },
    {
      image: require("../assets/env/water1.png"),
      ques: "Năng lượng tái tạo là gì?",
      choose: [
        "Năng lượng từ các nguồn không bao giờ cạn kiệt như gió và mặt trời.",
        "Năng lượng từ than đá.",
        "Năng lượng từ dầu mỏ.",
      ],
      ans: 0,
    },
    {
      image: require("../assets/env/water1.png"),
      ques: "Tại sao chúng ta nên trồng nhiều cây xanh?",
      choose: [
        "Vì cây xanh làm tăng nhiệt độ trái đất.",
        "Vì cây xanh giúp giảm ô nhiễm không khí và tạo ra oxy.",
        "Vì cây xanh làm mất đất.",
      ],
      ans: 1,
    },
    {
      image: require("../assets/env/water1.png"),
      ques: "Tại sao việc bảo tồn nguồn nước là quan trọng?",
      choose: [
        "Vì nước là tài nguyên vô hạn.",
        "Vì nước là cần thiết cho sự sống và không phải lúc nào cũng có sẵn.",
        "Vì chúng ta có thể sống mà không cần nước.",
      ],
      ans: 1,
    },
    {
      image: require("../assets/env/water1.png"),
      ques: "Hành động nào dưới đây giúp giảm rác thải nhựa?",
      choose: [
        "Sử dụng túi nhựa một lần.",
        "Sử dụng sản phẩm nhựa dùng một lần.",
        "Sử dụng túi vải và bình nước tái sử dụng.",
      ],
      ans: 2,
    },
    {
      image: require("../assets/env/water1.png"),
      ques: "Biến đổi khí hậu có thể gây ra hiện tượng nào sau đây?",
      choose: [
        "Nhiệt độ trung bình toàn cầu giảm.",
        "Hiện tượng băng tan ở hai cực.",
        "Lượng mưa không thay đổi.",
      ],
      ans: 1,
    },
    {
      image: require("../assets/env/water1.png"),
      ques: "Việc sử dụng năng lượng mặt trời có lợi ích gì?",
      choose: [
        "Giúp giảm hóa đơn điện và giảm khí thải carbon.",
        "Tăng lượng khí thải CO2.",
        "Làm cạn kiệt tài nguyên nhiên liệu hóa thạch.",
      ],
      ans: 0,
    },
  ],
  hard: [
    {
      image: require("../assets/env/water1.png"),
      ques: "Hiệu ứng nhà kính là gì?",
      choose: [
        "Hiện tượng các khí nhà kính giữ nhiệt từ mặt trời và làm ấm bầu khí quyển.",
        "Quá trình trồng cây xanh để tạo ra nhà kính.",
        "Quá trình làm lạnh bầu khí quyển.",
      ],
      ans: 0,
    },
    {
      image: require("../assets/env/water1.png"),
      ques: "Khí nào sau đây là khí nhà kính chính gây ra hiện tượng nóng lên toàn cầu?",
      choose: ["Oxy", "Carbon dioxide (CO2)", "Nitrogen"],
      ans: 1,
    },
    {
      image: require("../assets/env/water1.png"),
      ques: "Tại sao axit hóa đại dương là một vấn đề nghiêm trọng?",
      choose: [
        "Vì nó làm tăng nồng độ muối trong nước biển.",
        "Vì nó làm giảm độ pH của nước biển, ảnh hưởng đến sinh vật biển.",
        "Vì nó làm cho nước biển trong suốt hơn.",
      ],
      ans: 1,
    },
    {
      image: require("../assets/env/water1.png"),
      ques: "Sự tàn phá rừng nhiệt đới có thể dẫn đến hiện tượng nào sau đây?",
      choose: [
        "Tăng độ phủ xanh của Trái Đất.",
        "Giảm đa dạng sinh học và làm mất nơi ở của nhiều loài động vật.",
        "Giảm lượng khí CO2 trong khí quyển.",
      ],
      ans: 1,
    },
    {
      image: require("../assets/env/water1.png"),
      ques: "Biến đổi khí hậu có thể ảnh hưởng như thế nào đến mực nước biển?",
      choose: [
        "Làm giảm mực nước biển do nước biển bốc hơi.",
        "Không ảnh hưởng đến mực nước biển.",
        "Làm tăng mực nước biển do băng tan ở hai cực và giãn nở nhiệt của nước.",
      ],
      ans: 2,
    },
    {
      image: require("../assets/env/water1.png"),
      ques: "Nguồn năng lượng nào sau đây không phát thải khí CO2 khi sản xuất điện?",
      choose: ["Năng lượng hạt nhân", "Than đá", "Dầu mỏ"],
      ans: 0,
    },
    {
      image: require("../assets/env/water1.png"),
      ques: "Hiệp định nào sau đây nhằm hạn chế sự nóng lên toàn cầu bằng cách giảm phát thải khí nhà kính?",
      choose: ["Hiệp định Paris", "Hiệp định Geneva", "Hiệp định Kyoto"],
      ans: 0,
    },
    {
      image: require("../assets/env/water1.png"),
      ques: "Khái niệm 'vòng đời sản phẩm' bao gồm các giai đoạn nào?",
      choose: [
        "Sản xuất, sử dụng, và tái chế.",
        "Chỉ sản xuất và sử dụng.",
        "Chỉ tái chế.",
      ],
      ans: 0,
    },
    {
      image: require("../assets/env/water1.png"),
      ques: "Bức xạ nào từ mặt trời bị khí nhà kính giữ lại trong bầu khí quyển?",
      choose: ["Bức xạ cực tím", "Bức xạ hồng ngoại", "Bức xạ gamma"],
      ans: 1,
    },
    {
      image: require("../assets/env/water1.png"),
      ques: "Biện pháp nào sau đây hiệu quả nhất để giảm thiểu rác thải nhựa?",
      choose: [
        "Sử dụng các sản phẩm nhựa một lần.",
        "Tái sử dụng và tái chế nhựa, và thay thế nhựa bằng các vật liệu thân thiện với môi trường.",
        "Đốt nhựa để lấy nhiệt.",
      ],
      ans: 1,
    },
  ],
};

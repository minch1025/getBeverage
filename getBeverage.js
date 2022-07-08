const beverageList = {
    '콜라': 1100,
    '물': 600,
    '커피': 700
};
const cashRule = [100, 500, 1000, 5000, 10000]

function getBeverage(name, payment, wonList) {
    let theBalance = 0;
    let totalInsert = 0;

    if (payment == '현금') {
        for (const won of wonList) {
            if (!cashRule.includes(won)) {
                return `알맞지 않는 원화 규격은 ${won} 입니다.`;
            }
            totalInsert += won;
        }
    } else if (payment == '카드') {
        wonList.forEach((won) => {
            totalInsert += won
        })
    } else {
        return '잘못된 결제 수단입니다.'
    }

    const salePrice = Object.keys(beverageList).map((key) => beverageList[key]);
    const MinPrice = Math.min.apply(null, salePrice);
    if (totalInsert < MinPrice) {
        return "잔액 부족";
    }

    for (const beverage in beverageList) {
        if (name == beverage) {
            const price = beverageList[beverage];
            if (totalInsert < price) {
                return '잔액 부족';
            } else if (totalInsert > price) {
                theBalance = totalInsert - price;
                return theBalance;
            } else {
                return '다음에 또 이용해주세요';
            }
        } else {
            return '판매하지 않는 상품입니다.';
        }
    }

};

const wonList = [100, 100, 6000, 100]
console.log(getBeverage('코코팜', '현금', wonList));
console.log(getBeverage('콜라', '카드', wonList));
console.log(getBeverage('콜라', '티머니', wonList));
import React from 'react';

import { Page, View, Document, Text, StyleSheet, PDFDownloadLink, Font } from '@react-pdf/renderer';


Font.register({
    family: "Roboto",
    src:
        "https://cdnjs.cloudflare.com/ajax/libs/ink/3.1.10/fonts/Roboto/roboto-light-webfont.ttf"
});

const styles = StyleSheet.create({
    page: {
        flexDirection: 'column',
        backgroundColor: '#E4E4E4',
        fontFamily: "Roboto"
    },
    section: {
        margin: 10,
        padding: 10,
        border: 1,
    },
    text: {
        fontSize: 12,
    },
    table: {
        display: 'flex',
        flexDirection: 'row',
        marginLeft: 10,
        marginRight: 10,
    },
    thText: {
        fontSize: 10,
        fontWeight: 'bold',
        textAlign: 'center',
        padding: 5,
        height: 50,
        flex: 1,
        borderTop: 1,
        borderBottom: 1,
        borderRight: 1,
    },
    tdText: {
        fontSize: 10,
        textAlign: 'center',
        padding: 5,
        height: 50,
        flex: 1,
        borderBottom: 1,
        borderRight: 1,
    }
});

const MyDoc = (props) => (
    <Document>
        <Page size="A4" style={styles.page}>
            <View style={styles.section}>
                <Text style={styles.text}>За расчетный период - {props.month} {props.year}</Text>
                <Text style={styles.text}>Ф.И.О. плательщика/собственника: {props.name}</Text>
                <Text style={styles.text}>Адрес помещения: </Text>
                <Text style={styles.text}>Общая площадь, кв.м.:      Жилая площадь, кв.м.:     Количество зарегистрированных, чел.:  </Text>
            </View>

            <View style={styles.section}>
                <Text style={styles.text}>Наименование организации:</Text>
                <Text style={styles.text}>ООО "УК Мой Дом", ИНН/КПП 152151514/18615315, ОГРН 1531315431, р/с 401215353212153131231, ПАО Сбербанк, к/с 1322135312135131, БИК 15312315 сайт: http://i-myhouse.ru/ Email: example@example.org </Text>
                <Text style={styles.text}>Контакты: аварийная служба: т.999999999, ЖЭУ т.54135132 </Text>
            </View>

            <View style={styles.table}>
                <Text style={[styles.thText, { borderLeft: 1 }]}>Вид услуги</Text>
                <Text style={styles.thText}>Прошлые показания</Text>
                <Text style={styles.thText}>Текущие показания</Text>
                <Text style={styles.thText}>Потребление за месяц</Text>
                <Text style={styles.thText}>Тариф руб/ед.изм</Text>
                <Text style={styles.thText}>Всего начислено</Text>
                <Text style={styles.thText}>Льготы и перерасчеты</Text>
                <Text style={styles.thText}>Итого к оплате</Text>
            </View>
            <View style={styles.table}>
                <Text style={[styles.tdText, { borderLeft: 1 }]}>{props.type}</Text>
                <Text style={styles.tdText}>{props.last}</Text>
                <Text style={styles.tdText}>{props.now}</Text>
                <Text style={styles.tdText}>{(props.now - props.last)}</Text>
                <Text style={styles.tdText}>{props.tax}</Text>
                <Text style={styles.tdText}>{(props.now - props.last) * props.tax}</Text>
                <Text style={styles.tdText}>-</Text>
                <Text style={styles.tdText}>{(props.now - props.last) * props.tax}</Text>
            </View>
        </Page>
    </Document>
);


class DocumentRender extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {

        return (
            <div>
                <PDFDownloadLink document={<MyDoc last={this.props.last} now={this.props.now} tax={this.props.tax} month={this.props.month} year={this.props.year} type={this.props.type}/>} fileName="pay.pdf">
                    {({ blob, url, loading, error }) => (loading ? 'Загрузка документа...' : 'Получить квитанцию')}
                </PDFDownloadLink>
            </div>

        )
    }
}

/*const DocumentRender = () => {
    const [instance, updateInstance] = usePDF({ document: MyDoc });

    if (instance.loading) return <div>Loading ...</div>;

    if (instance.error) return <div>Something went wrong: {error}</div>;

    return (
        <a href={instance.url} download="test.pdf">
            Download
        </a>
    );
}*/

export default DocumentRender;

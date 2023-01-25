import React from 'react';

import { Page, View, Document, Text, StyleSheet, PDFDownloadLink, Font } from '@react-pdf/renderer';


Font.register({
    family: "Roboto",
    src:
        "https://cdnjs.cloudflare.com/ajax/libs/ink/3.1.10/fonts/Roboto/roboto-light-webfont.ttf"
});

const styles = StyleSheet.create({
    page: {
        flexDirection: 'row',
        backgroundColor: '#E4E4E4',
        fontFamily: "Roboto"
    },
    section: {
        margin: 10,
        padding: 10,

    }
});

const MyDoc = (props) => (
    <Document>
        <Page size="A4" style={styles.page}>
            <View style={styles.section}>
                <Text>Квитанция</Text>
                <Text>Прошлые показания: {props.last}</Text>
                <Text>Текущие показания: {props.now}</Text>
                <Text>Тариф: {props.tax}</Text>
                <Text>Итого к оплате: {(props.now - props.last) * props.tax} руб.</Text>
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
                <PDFDownloadLink document={<MyDoc last={this.props.last} now={this.props.now} tax={this.props.tax}/>} fileName="pay.pdf">
                    {({ blob, url, loading, error }) => (loading ? 'Loading document...' : 'Получить квитанцию')}
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

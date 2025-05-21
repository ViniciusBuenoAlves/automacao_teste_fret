const locators = {
        PAG_AGENDAMENTO: {
            LINK: 'https://www.fretadao.com.br/passageiros.',
            CAMPO_ORIGEM: 'input[name="a"]',
            CAMPO_DESTINO: 'input[name="b"]',
            BTN_BUSCAR:'button[data-action="search-box#submit"]',
            XP_BTN_VER_DETALHES:'//a[contains(text(), "Ver detalhes")]',
            XP_BTN_AGENDAR_VIAGEM: '//a[contains(text(), "Agendar viagem de teste")]'
        },
                
        PAG_LISTA_ESPERA: {
            CAMPO_NOME: 'input[name="contact[name]"]',
            CAMPO_TELEFONE: 'input[name="contact[phone]"]',
            CAMPO_EMAIL: 'input[name="contact[email]"]',
            CAMPO_HORARIO_CHEGADA: 'input[name="contact[ingoing_arrival_time]"]',
            CAMPO_HORARIO_SAIDA: 'input[name="contact[outgoing_departure_time]"]',
            CAMPO_DATA_LIMITE: 'input[name="contact[limit_date]"]',
            BTN_SUBMETER_FORM: 'button[name="button"]'
        }
}

export default locators;
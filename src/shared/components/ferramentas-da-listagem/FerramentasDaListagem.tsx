import { Box, Button, Icon, InputAdornment, ListItemIcon, Paper, TextField, useTheme } from "@mui/material";

interface IFerramentasDaListagemPros {
    textoDaBusca?: string;
    mostrarInputBusca?: boolean;
    aoMudarTextoDeBusca?: (novoTexto: string) => void;
    textoBotaoNovo?: string;
    mostrarBotaoNovo?: boolean;
    aoClicarEmNovo?: () => void;
}
export const FerramentasDaListagem: React.FC<IFerramentasDaListagemPros> = ({
    textoDaBusca = '',
    mostrarInputBusca = false,
    aoMudarTextoDeBusca,
    textoBotaoNovo = 'Novo',
    mostrarBotaoNovo = true,
    aoClicarEmNovo 
}) => {
    const theme = useTheme();

    return (
        <Box
            height={theme.spacing(5)}
            component={Paper} elevation={6}
            marginX={1}
            padding={1}
            paddingX={2}
            display="flex"
            gap={1}
            alignItems="center">

            {mostrarInputBusca && (  
                <TextField 
                value={textoDaBusca}
                onChange={(e) => aoMudarTextoDeBusca?.(e.target.value)}
                size="small" 
                placeholder="Pesquisar..."
                    InputProps={{
                        startAdornment: (
                            <InputAdornment position="start">
                                <ListItemIcon>
                                    <Icon>search</Icon>
                                </ListItemIcon>
                            </InputAdornment>
                        ),
                    }} />
            )}

            <Box flex={1} display="flex" justifyContent="end">
                {mostrarBotaoNovo && (
                    <Button 
                    color='primary'
                    disableElevation
                    variant='contained'
                    onClick={aoClicarEmNovo}
                    endIcon={<Icon>add</Icon>}
                    >{textoBotaoNovo}</Button>
                )}
            </Box>

        </Box>
    );
};
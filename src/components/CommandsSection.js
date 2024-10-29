// src/components/CommandsSection.js
import React from "react";
import { Grid, Box, Typography, Divider } from "@mui/material";
import { Fade } from "@mui/material";
import CodeIcon from "@mui/icons-material/Code";
import StyledMainCard from "./StyledMainCard";
import StyledMiniCard from "./StyledMiniCard";
import PropTypes from "prop-types";
import { CardContent } from "@mui/material";
import { useTheme, alpha } from "@mui/material/styles";

const CommandsSection = ({ commands, checked }) => {
  const theme = useTheme();
  return (
    <Box sx={{ px: 4 }}>
      <Grid container spacing={4} >
        <Grid item xs={12}>
          <Fade in={checked} timeout={1000}>
            <Box>
              <StyledMainCard sx={{ pl: 2, pr: 2 }}>
                <CardContent>
                  <Box display="flex" alignItems="center" mb={2} sx={{ pt: 1 }}>
                    <CodeIcon
                      color="primary"
                      sx={{ marginRight: 1, fontSize: "2rem" }}
                    />
                    <Typography
                      variant="h5"
                      component="div"
                      sx={{
                        fontWeight: "bold",
                        fontSize: { xs: "1.2rem", sm: "1.5rem", md: "1.8rem" },
                      }}
                    >
                      Commands
                    </Typography>
                  </Box>
                  <Divider
                    sx={{
                      my: 2,
                      borderBottomWidth: 2,
                      borderRadius: 16,
                      borderColor: alpha(theme.palette.primary.main, 0.7),
                      borderStyle: "solid",
                    }}
                  />

                  {commands && commands.length > 0 ? (
                    commands.map((command, index) => (
                      <Box key={index} sx={{ mb: 3 }}>
                        <Typography
                          variant="h6"
                          component="div"
                          sx={{ fontWeight: "bold" }}
                        >
                          {" "}
                          <Typography
                            component="span"
                            color={theme.palette.primary.main}
                            sx={{
                              letterSpacing: "2px",
                              fontWeight: "bold",
                              fontSize: "1.2rem",
                            }}
                          >
                            {">"}
                          </Typography>
                          {command.name}
                        </Typography>
                        <Typography
                          variant="body1"
                          marginTop={0.9}
                          color="text.secondary"
                          sx={{ mb: 1 }}
                        >
                          {command.description}
                        </Typography>

                        {command.subcommands &&
                          command.subcommands.length > 0 && (
                            <Box>
                              <Grid container spacing={2} marginTop={0}>
                                {command.subcommands.map(
                                  (subcommand, subIndex) => (
                                    <Grid
                                      item
                                      xs={12}
                                      sm={6}
                                      lg={4}
                                      key={subIndex}
                                    >
                                      <StyledMiniCard>
                                        <CardContent>
                                          <Typography
                                            variant="subtitle2"
                                            sx={{ fontWeight: "bold" }}
                                          >
                                            {" "}
                                            <Typography
                                              component="span"
                                              color={theme.palette.primary.main}
                                              sx={{
                                                letterSpacing: "2px",
                                                fontWeight: "bold",
                                                fontSize: "0.9rem",
                                              }}
                                            >
                                              {">"}
                                            </Typography>
                                            {command.name} {subcommand.name}
                                          </Typography>
                                          <Typography
                                            variant="body2"
                                            color="text.secondary"
                                          >
                                            {subcommand.description}
                                          </Typography>
                                        </CardContent>
                                      </StyledMiniCard>
                                    </Grid>
                                  )
                                )}
                              </Grid>
                            </Box>
                          )}
                        <Divider sx={{ my: 3 }} />
                      </Box>
                    ))
                  ) : (
                    <Typography variant="body1">
                      No commands data available.
                    </Typography>
                  )}
                </CardContent>
              </StyledMainCard>
            </Box>
          </Fade>
        </Grid>
      </Grid>
    </Box>
  );
};

CommandsSection.propTypes = {
  commands: PropTypes.array.isRequired,
  checked: PropTypes.bool.isRequired,
};

export default CommandsSection;

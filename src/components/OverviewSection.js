// src/components/OverviewSection.js
import React from "react";
import { Grid, Box, Typography, Divider } from "@mui/material";
import { Grow } from "@mui/material";
import ComputerIcon from "@mui/icons-material/Computer";
import MemoryIcon from "@mui/icons-material/Memory";
import CodeIcon from "@mui/icons-material/Code";
import UpdateIcon from "@mui/icons-material/Update";
import StyledInfoCard from "./StyledInfoCard";
import PropTypes from "prop-types";
import { CardContent } from "@mui/material";
import { useTheme, alpha } from "@mui/material/styles";

const OverviewSection = ({ data, checked }) => {
  const theme = useTheme();
  const sections = [
    {
      title: "System Information",
      icon: (
        <ComputerIcon
          color="primary"
          sx={{ marginRight: 1, fontSize: "2rem" }}
        />
      ),
      content: (
        <>
          <Typography>
            <strong>System:</strong> {data.system}
          </Typography>
          <Typography>
            <strong>Processor:</strong> {data.processor}
          </Typography>
          <Typography>
            <strong>CPU Cores:</strong> {data.cpu_cores.physical} physical,{" "}
            {data.cpu_cores.logical} logical
          </Typography>
          <Typography>
            <strong>CPU Speed:</strong> {data.cpu_speed}
          </Typography>
        </>
      ),
      timeout: 600,
    },
    {
      title: "Resource Usage",
      icon: (
        <MemoryIcon color="primary" sx={{ marginRight: 1, fontSize: "2rem" }} />
      ),
      content: (
        <>
          <Typography>
            <strong>CPU Usage:</strong> {data.cpu_usage}%
          </Typography>
          <Typography>
            <strong>CPU Temp:</strong> {data.cpu_temp}
          </Typography>
          <Typography>
            <strong>Memory Usage:</strong> {data.memory_usage}
          </Typography>
          <Typography>
            <strong>Disk Usage:</strong> {data.disk_usage}
          </Typography>
        </>
      ),
      timeout: 700,
    },
    {
      title: "Application Details",
      icon: (
        <CodeIcon color="primary" sx={{ marginRight: 1, fontSize: "2rem" }} />
      ),
      content: (
        <>
          <Typography>
            <strong>Python Version:</strong> {data.python_version}
          </Typography>
          <Typography>
            <strong>discord.py Version:</strong> {data.discord_py_version}
          </Typography>
        </>
      ),
      timeout: 800,
    },
    {
      title: "Uptime and Usage",
      icon: (
        <UpdateIcon color="primary" sx={{ marginRight: 1, fontSize: "2rem" }} />
      ),
      content: (
        <>
          <Typography>
            <strong>System Uptime:</strong> {data.system_uptime}
          </Typography>
          <Typography>
            <strong>Bot Uptime:</strong> {data.bot_uptime}
          </Typography>
          <Typography>
            <strong>Servers:</strong> {data.servers}
          </Typography>
          <Typography>
            <strong>Users:</strong> {data.users}
          </Typography>
          <Typography>
            <strong>Command Prefix:</strong>{" "}
            <Typography
              component="span"
              color={theme.palette.primary.main}
              sx={{
                letterSpacing: "2px",
                fontWeight: "bold",
                fontSize: "0.9rem",
              }}
            >
              {data.command_prefix}
            </Typography>
          </Typography>
        </>
      ),
      timeout: 900,
    },
  ];

  return (
    <Box sx={{ px: 4 }}>
      <Grid container spacing={4}>
        {sections.map((section, index) => (
          <Grid item xs={12} lg={6} key={index}>
            <Grow in={checked} timeout={section.timeout}>
              <Box>
                <StyledInfoCard sx={{ pt: 1, pb: 1 }}>
                  <CardContent>
                    <Box display="flex" alignItems="center" mb={2}>
                      {section.icon}
                      <Typography
                        variant="h5"
                        component="div"
                        sx={{ fontWeight: "bold" }}
                      >
                        {section.title}
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
                    {section.content}
                  </CardContent>
                </StyledInfoCard>
              </Box>
            </Grow>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

OverviewSection.propTypes = {
  data: PropTypes.object.isRequired,
  checked: PropTypes.bool.isRequired,
};

export default OverviewSection;

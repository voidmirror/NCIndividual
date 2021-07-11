package com.own.config;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.own.additional.CustomUserDetails;
import com.own.entity.User;
import com.own.repository.UserRepository;
import com.own.service.CustomUserDetailsService;
//import com.own.service.PBKDF2EncoderCustom;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.http.converter.json.MappingJackson2HttpMessageConverter;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.crypto.password.Pbkdf2PasswordEncoder;
import org.springframework.security.web.authentication.AuthenticationSuccessHandler;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.sql.DataSource;
import java.io.IOException;
import java.io.PrintWriter;

import static com.sun.xml.internal.ws.spi.db.BindingContextFactory.LOGGER;

@Configuration
@EnableWebSecurity
public class SecurityConfig extends WebSecurityConfigurerAdapter{

    @Autowired
    private CustomUserDetailsService userDetailsService;

    @Autowired
    private UserRepository userRepository;

    @Override
    protected void configure(AuthenticationManagerBuilder auth) throws Exception {
        auth.userDetailsService(userDetailsService);
//        auth.inMemoryAuthentication()
//                .withUser("user")
//                .password("pass")
//                .roles("ADMIN");
    }

    @Override
    protected void configure(HttpSecurity http) throws Exception {
        http.authorizeRequests()
//                .antMatchers("/rest/v1/users/**").hasRole("ADMIN")
//                .antMatchers("/rest/v1/**").hasRole("USER")
                .antMatchers("/").hasRole("ADMIN")
                .antMatchers("/rest/v1/users/*").hasRole("USER")
                .and().csrf().disable()
                .headers().frameOptions().disable()

                .and().formLogin().successHandler(successHandler());

    }

    private AuthenticationSuccessHandler successHandler() {
        return new AuthenticationSuccessHandler() {
            @Override
            public void onAuthenticationSuccess(HttpServletRequest httpServletRequest, HttpServletResponse httpServletResponse, Authentication authentication) throws IOException, ServletException {
//                httpServletResponse.getWriter().append("OK");
//                httpServletResponse.setStatus(200);
                MappingJackson2HttpMessageConverter messageConverter = new MappingJackson2HttpMessageConverter();
                ObjectMapper mapper = messageConverter.getObjectMapper();

                httpServletResponse.setStatus(HttpServletResponse.SC_OK);

                CustomUserDetails userDetails = (CustomUserDetails) authentication.getPrincipal();

                User user = userRepository.findByUsername(userDetails.getUsername()).get();

                LOGGER.info(userDetails.getUsername() + " is connected");

                PrintWriter writer = httpServletResponse.getWriter();

                mapper.writeValue(writer, user.getRoles());

                writer.flush();
            }
        };
    }

}

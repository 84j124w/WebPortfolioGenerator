package com.wpg.jwt;

import io.jsonwebtoken.Claims;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.stereotype.Component;

import java.util.Date;
import java.util.HashMap;
import java.util.Map;
import java.util.Objects;
import java.util.function.Function;

@Component
public class JWTTokenHelper {
    public static final long JWT_TOKEN_VALIDITY = 5*60*60;
    private final String JWT_SECRET = "ANYRANDOMLETTERSSECRET";

    //retrieve username from jwt token
    public String getUserNameFromToken(String token){
        return getClaimFromToken(token, Claims::getSubject);
    }

    //retrieve expiration date from jwt token
    public Date getExpirationDateFromToken(String token){
        return getClaimFromToken(token, Claims::getExpiration);
    }

    //retrieve claim from token
    public <T> T getClaimFromToken(String token, Function<Claims, T> claimsResolver){
        final Claims claims = getAllClaimsFromToken(token);
        return claimsResolver.apply(claims);
    }

    //For retrieving any information from token we will need the secret key
    private Claims getAllClaimsFromToken(String token){
        return Jwts.parser().setSigningKey(JWT_SECRET).parseClaimsJws(token).getBody();
    }

    //check if the token has expired
    private boolean isTokenExpired(String token){
        final Date expiration = getExpirationDateFromToken(token);
        return expiration.before(new Date());
    }

    //generate token for user
    public String generateToken(UserDetails userDetails){
        Map<String, Object> claims = new HashMap<>();
        return doGenerateToken(claims, userDetails.getUsername());
    }

    /*While creating the token
    * 1. Define claims of the Token, like Issuer, Expiration, Subject and the Id
    * 2. Sign the JWT using the HS512 algorithm and secret key.
    * 3. According to JWS Compact serialization () compaction of the JWT to a URL-safe string */
    private String doGenerateToken(Map<String,Object> claims, String subject){
        return Jwts.builder().setClaims(claims).setSubject(subject).setIssuedAt(new Date(System.currentTimeMillis()))
                .setExpiration(new Date(System.currentTimeMillis()+JWT_TOKEN_VALIDITY*100))
                .signWith(SignatureAlgorithm.HS512, JWT_SECRET).compact();
    }

    //validate token
    public boolean validateToken(String token, UserDetails userDetails){
        final String username = getUserNameFromToken(token);
        System.out.println(username.equals(userDetails.getUsername()+"<>"+isTokenExpired(token)));
        return (username.equals(userDetails.getUsername()) && !isTokenExpired(token));
    }

}

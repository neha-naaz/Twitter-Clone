package com.nehan.model;

import java.time.LocalDateTime;
import lombok.Data;

@Data
public class Verification {

    private boolean status;

    private LocalDateTime startedAt;

    private LocalDateTime endsAt;

    private String planType;
}
